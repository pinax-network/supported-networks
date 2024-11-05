import fs from "fs";
import path from "path";
import { Network, TheGraphNetworksRegistry } from "./types/registry";
import { loadNetworks } from "./utils/fs";
import packageInfo from "../package.json";
import { getVersionFilenames } from "./utils/versions";

function generateMermaidGraph(networks: Network[]): string {
  const relations = networks
    .reduce((acc: string[], network) => {
      network.relations?.forEach((relation) => {
        acc.push(`${network.id} -->|${relation.kind}| ${relation.network}`);
      });
      return acc;
    }, [])
    .sort(
      (a, b) =>
        (a.endsWith("| mainnet") ? 1 : 0) - (b.endsWith("| mainnet") ? 1 : 0),
    );

  return `graph TD\n  ${relations.join("\n  ")}\n`;
}

function main() {
  const [
    ,
    ,
    networksDir = "registry",
    outputDir = "dist",
  ] = process.argv;

  const REGISTRY_ROOT_URL =
    process.env.REGISTRY_ROOT_URL ||
    (() => {
      throw new Error("REGISTRY_ROOT_URL is not defined");
    })();

  const {
    filenameLatest,
    filenameLatestMinor,
    filenameLatestMajor,
    filenameRegistrySchema,
  } = getVersionFilenames(packageInfo.version);

  const registry: TheGraphNetworksRegistry = {
    $schema: `${REGISTRY_ROOT_URL}/${filenameRegistrySchema}`,
    version: `${packageInfo.version}`,
    description:
      "The Graph networks registry. This file was generated and validated. Do NOT edit it manually.",
    updatedAt: new Date().toISOString(),
    networks: loadNetworks(networksDir),
  };

  const content = JSON.stringify(registry, null, 2);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, filenameLatest), content);
  fs.writeFileSync(path.join(outputDir, filenameLatestMinor), content);
  fs.writeFileSync(path.join(outputDir, filenameLatestMajor), content);
  fs.copyFileSync(
    path.join(__dirname, "../schemas/registry.schema.json"),
    path.join(outputDir, filenameRegistrySchema),
  );

  process.stdout.write(
    `Generated ${filenameLatest} with ${registry.networks.length} networks`,
  );

  const mermaid = generateMermaidGraph(registry.networks);
  process.stdout.write(`\n\n${mermaid}`);
}

main();

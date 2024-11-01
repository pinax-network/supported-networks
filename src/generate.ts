import fs from "fs";
import path from "path";
import { Network, TheGraphNetworksRegistry } from "./types/registry";
import { loadNetworks } from "./utils/fs";
import packageInfo from "../package.json";
import { getVersionFilenames } from "./utils/versions";

function generateMermaidGraph(networks: Network[]): string {
  const relations: string[] = [];

  networks.forEach((network) => {
    const fromNode = network.id;
    network.relations?.forEach((relation) => {
      const toNode = relation.network;
      const relationType = relation.kind;
      relations.push(`${fromNode} -->|${relationType}| ${toNode}`);
    });
  });

  return `graph TD\n  ${relations.join("\n  ")}\n`;
}


function main() {
  const [
    ,
    ,
    networksDir = "registry/networks",
    outputDir = "registry",
  ] = process.argv;

  const {
    filenameLatest,
    filenameLatestMinor,
    filenameLatestMajor,
    filenameRegistrySchema,
  } = getVersionFilenames(packageInfo.version);

  const registry: TheGraphNetworksRegistry = {
    $schema: `https://thegraph.com/schemas/${filenameRegistrySchema}`,
    version: `${packageInfo.version}`,
    description:
      "The Graph networks registry. This file was generated and validated. Do NOT edit it manually.",
    updatedAt: new Date().toISOString(),
    networks: loadNetworks(networksDir),
  };

  const content = JSON.stringify(registry, null, 2);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, filenameLatest), content);
  fs.writeFileSync(`${outputDir}/${filenameLatestMinor}`, content);
  fs.writeFileSync(`${outputDir}/${filenameLatestMajor}`, content);
  process.stdout.write(
    `Generated ${filenameLatest} with ${registry.networks.length} networks`,
  );

  const mermaid = generateMermaidGraph(registry.networks);
  process.stdout.write(`\n\n${mermaid}`);
}

main();

import fs from "fs";
import { HttpsThegraphComSchemasV1RegistrySchemaJson as RegistrySchema } from "./types/registry";
import { loadNetworks } from "./utils/networks";
import packageInfo from "../package.json";
import { getVersionFilenames } from "./utils/versions";

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

  const registry: RegistrySchema = {
    $schema: `https://thegraph.com/schemas/${filenameRegistrySchema}`,
    version: `${packageInfo.version}`,
    description:
      "The Graph networks registry. This file was generated and validated. Do NOT edit it manually.",
    updatedAt: new Date().toISOString(),
    networks: loadNetworks(networksDir),
  };

  const content = JSON.stringify(registry, null, 2);
  fs.writeFileSync(`${outputDir}/${filenameLatest}`, content);
  // fs.writeFileSync(`${outputDir}/${filenameLatestMinor}`, content);
  // fs.writeFileSync(`${outputDir}/${filenameLatestMajor}`, content);
  process.stdout.write(
    `Generated ${filenameLatest} with ${registry.networks.length} networks`,
  );
}

main();

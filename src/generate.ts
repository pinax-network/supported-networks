import fs from "fs";
import { HttpsThegraphComSchemasV1RegistrySchemaJson as RegistrySchema } from "./types/registry";
import { loadNetworks } from "./utils/networks";

function main() {
  const [
    ,
    ,
    networksPath = "registry/networks",
    outputPath = "registry/registry.generated.json",
  ] = process.argv;

  const registry: RegistrySchema = {
    $schema: "https://thegraph.com/schemas/registry.schema.json",
    version: "1.0.0",
    description:
      "The Graph networks registry. This file was generated and validated. Do NOT edit it manually.",
    updatedAt: new Date().toISOString(),
    networks: loadNetworks(networksPath),
  };

  const content = JSON.stringify(registry, null, 2);
  fs.writeFileSync(outputPath, content);
  process.stdout.write(
    `Generated ${outputPath} with ${registry.networks.length} networks`,
  );
}

main();

import fs from "fs";
import { HttpsThegraphComSchemasV1RegistrySchemaJson as RegistrySchema} from './types/registry';
import { loadNetworks } from "./utils/networks";


function main() {

    const [,, networksPath = 'registry/networks', outputPath = 'registry/registry.json'] = process.argv;

    const registry: RegistrySchema = {
        networks: loadNetworks(networksPath)
    };

    const content = JSON.stringify(registry, null, 2);
    fs.writeFileSync(outputPath, content);
    process.stdout.write(`Generated ${outputPath} with ${registry.networks.length} networks`);
}

main();
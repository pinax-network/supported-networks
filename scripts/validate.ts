
import { HttpsThegraphComNetworkSchemaJson as NetworkSchema} from './types/network';
import { loadNetworks } from './utils/networks';
import { fetchWeb3NetworkIcons } from './utils/web3icons';

const NETWORKS: NetworkSchema[] = [];
const ERRORS: string[] = [];

function validateUniqueness() {

    process.stdout.write("Validating uniqueness ... ");
    for (const field of ['name', 'displayName', 'caip2ChainId', 'aliases']) {
        const values = NETWORKS.flatMap(n => Array.isArray(n[field]) ? n[field] : [n[field]]);
        const uniqueValues = new Set(values);
        if (uniqueValues.size !== values.length) {
            const value = values.find((item, index) => values.indexOf(item) !== index);
            ERRORS.push(`Duplicate field: "${field} = ${value}"`);
        }
    }
    process.stdout.write("done\n");
}

function validateChildren() {

    process.stdout.write("Validating children ... ");
    for (const network of NETWORKS) {
        if (network.childOf) {
            if (!NETWORKS.find(n => n.name === network.childOf)) {
                ERRORS.push(`Network ${network.name} has unknown parent: ${network.childOf}`);
            }
        }
    }
    process.stdout.write("done\n");
}

async function validateWeb3Icons() {

    process.stdout.write("Validating web3 icons ... ");
    const icons = await fetchWeb3NetworkIcons();
    for (const network of NETWORKS) {
        if (network.web3Icon) {
            if (!icons.find(i => i.id === network.web3Icon)) {
                ERRORS.push(`Network ${network.name} web3icon id does not exist: ${network.web3Icon}`);
            }
        }
        else {
            if (icons.find(i => i.id === network.name)) {
                ERRORS.push(`Network ${network.name} does not have a web3icon but there exists an icon with the same id. Consider adding it.`);
            }
        }
    }
    process.stdout.write("done\n");
}

async function main() {

    NETWORKS.push(...loadNetworks('registry/networks'));
    process.stdout.write(`Loaded ${NETWORKS.length} networks\n`);

    if (NETWORKS.length === 0) {
        ERRORS.push('No networks found');
    }

    validateUniqueness();
    validateChildren();
    await validateWeb3Icons();

    if (ERRORS.length > 0) {
        process.stderr.write('Validation errors:\n');
        for (const error of ERRORS) {
            process.stderr.write(`  - ${error}\n`);
        }
        process.exit(1);
    }

    process.stdout.write('All networks are valid\n');
}

await main();
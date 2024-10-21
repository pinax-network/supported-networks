import { untypedSupportedNetworkMap } from "./edge-node-common";
import web3iconsNetworks from './web3icons.networks.json';
import web3iconsTokens from './web3icons.tokens.json';

const web3icons = new Set<string>();

for (const network of web3iconsNetworks) {
    web3icons.add(network.id)
    web3icons.add(network.name?.toLowerCase())
    if (network.chainId) web3icons.add(String(network.chainId))
}

for (const token of web3iconsTokens) {
    web3icons.add(token.id)
    web3icons.add(token.name?.toLowerCase())
}

for (const [key, networkMap] of untypedSupportedNetworkMap) {
    for (const chain of networkMap.chains) {
        if (!chain.testnet) continue;
        if (web3icons.has(chain.name.toLowerCase()) || web3icons.has(chain.graphCliName.toLowerCase()) || web3icons.has(String(chain.chainId)) || web3icons.has(String(chain.network))) {
            // console.log("yes", chain.graphCliName)
        } else {
            console.log("missing", chain.graphCliName)
        }
    }
}
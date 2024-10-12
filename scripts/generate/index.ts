import fs from 'fs';
import { fetchChainIdNetwork } from "./chainid";
import { fetchLlamaChains } from "./llama";
import { fetchStudioDeploy } from "./studio";


fetchChainIdNetwork().then((chains) => {
    fs.writeFileSync("_data/chainid.json", JSON.stringify(chains, null, 2));
});
fetchLlamaChains().then((chains) => {
    fs.writeFileSync("_data/llama.json", JSON.stringify(chains, null, 2));
});
fetchStudioDeploy().then((chains) => {
    fs.writeFileSync("_data/studio.json", JSON.stringify(chains, null, 2));
});
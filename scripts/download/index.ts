import fs from 'fs';
import path from 'path';
import { fetchChainIdNetwork } from "./chainid";
import { fetchLlamaChains } from "./llama";
import { fetchStudioDeploy } from "./studio";
import { fetchCoinGeckoList } from './coingecko';

const base = path.join(__dirname);

fetchChainIdNetwork().then((chains) => {
    fs.writeFileSync(path.join(base, "chainid.json"), JSON.stringify(chains, null, 2));
});
fetchLlamaChains().then((chains) => {
    fs.writeFileSync(path.join(base, "llama.json"), JSON.stringify(chains, null, 2));
});
fetchStudioDeploy().then((chains) => {
    fs.writeFileSync(path.join(base, "studio.json"), JSON.stringify(chains, null, 2));
});
fetchCoinGeckoList().then((chains) => {
    fs.writeFileSync(path.join(base, "coingecko.json"), JSON.stringify(chains, null, 2));
});
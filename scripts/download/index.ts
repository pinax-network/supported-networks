import fs from 'fs';
import path from 'path';
import { fetchChainIdNetwork } from "./chainid";
import { fetchLlamaChains } from "./llama";
import { fetchStudioDeploy } from "./edge-node-studio";
import { fetchCoinGeckoList } from './coingecko';
import { fetchWeb3Icons } from './web3icons';

const base = path.join(__dirname);

fetchChainIdNetwork().then((data) => {
    fs.writeFileSync(path.join(base, "chainid.json"), JSON.stringify(data, null, 2));
});
fetchLlamaChains().then((data) => {
    fs.writeFileSync(path.join(base, "llama.json"), JSON.stringify(data, null, 2));
});
fetchStudioDeploy().then((data) => {
    fs.writeFileSync(path.join(base, "edge-node-studio.json"), JSON.stringify(data, null, 2));
});
fetchCoinGeckoList().then((data) => {
    fs.writeFileSync(path.join(base, "coingecko.json"), JSON.stringify(data, null, 2));
});
fetchWeb3Icons().then((data) => {
    fs.writeFileSync(path.join(base, "web3icons.json"), JSON.stringify(data, null, 2));
});
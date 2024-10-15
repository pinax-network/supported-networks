import fs from "fs";
import path from "path";
import { Web3Icons } from "../download/web3icons";
import web3iconsNetworks from '../download/web3icons.networks.json';
import web3iconsTokens from '../download/web3icons.tokens.json';

const base = path.join(__dirname, "..", "..", "_data");

// read & parse networks
const ids: Set<string> = new Set();
const chain_ids: Map<number, string> = new Map();
const names: Map<string, string> = new Map();
for (const filename of fs.readdirSync(path.join(base, "networks"), { recursive: true })) {
    if (typeof filename !== 'string') continue;
    if (!filename.endsWith(".json")) continue;
    let id = path.parse(filename).name;
    const json = JSON.parse(fs.readFileSync(path.join(base, "networks", filename), "utf-8"));
    if (json.web3icons_id) id = json.web3icons_id;
    chain_ids.set(json.chain_id, id);
    names.set(json.name, id);
    ids.add(id);
}

async function download(id: string, variants: string[], type: string, graph_id: string) {
    for (const variant of variants) {
        const url = `https://raw.githubusercontent.com/0xa3k5/web3icons/refs/heads/main/raw-svgs/${type}/${variant}/${id}.svg`;
        const filename = path.join(base, "icons", variant, `${graph_id}.svg`);
        if (fs.existsSync(filename)) { continue }; // skip if already exists
        const response = await fetch(url);
        if (response.ok) {
            const svg = await response.text();
            console.log(`✅ saving ${url}`);
            fs.writeFileSync(filename, svg);
        } else {
            console.error(`❌ error ${await response.text()}`)
        }
    }
}

function getGraphId(web3icon: Web3Icons) {
    if (ids.has(web3icon.id)) {
        return web3icon.id;
    }
    // by chain_id
    if (web3icon?.chainId) {
        const id = chain_ids.get(web3icon.chainId);
        return id;
    }
    // by name
    const id = names.get(web3icon.name);
    return id;
}

// download web3icons if match by chain_id or name
for (const web3icon of web3iconsNetworks as Web3Icons[]) {
    const graph_id = getGraphId(web3icon);
    if (graph_id) {
        await download(web3icon.id, web3icon.variants, "networks", graph_id);
    }
}

for (const web3icon of web3iconsTokens as Web3Icons[]) {
    const graph_id = getGraphId(web3icon);
    if (web3icon.symbol && graph_id) {
        await download(web3icon.symbol.toUpperCase(), web3icon.variants, "tokens", graph_id);
    }
}

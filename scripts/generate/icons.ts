import fs from "fs";
import path from "path";
import web3icons from '../download/web3icons.json';

const base = path.join(__dirname, "..", "..", "_data");

// read & parse chains
const ids: Set<string> = new Set();
const chain_ids: Map<number, string> = new Map();
const names: Map<string, string> = new Map();
for (const filename of fs.readdirSync(path.join(base, "chains"))) {
    const id = path.parse(filename).name;
    const json = JSON.parse(fs.readFileSync(path.join(base, "chains", filename), "utf-8"));
    chain_ids.set(json.chain_id, id);
    names.set(json.name, id);
    ids.add(id);
}

async function download(web3icon: typeof web3icons[0], id: string) {
    for (const variant of web3icon.variants) {
        const url = `https://raw.githubusercontent.com/0xa3k5/web3icons/refs/heads/main/packages/core/src/svgs/networks/${variant}/${web3icon.id}.svg`;
        const filename = path.join(base, "icons", variant, `${id}.svg`);
        if (fs.existsSync(filename)) continue; // skip if already exists
        const response = await fetch(url);
        if (response.ok) {
            const svg = await response.text();
            fs.writeFileSync(filename, svg);
        }
    }
}

function getId(web3icon: typeof web3icons[0]) {
    if (ids.has(web3icon.id)) {
        return web3icon.id;
    }
    // by chain_id
    if (web3icon.chainId) {
        const id = chain_ids.get(web3icon.chainId);
        return id;
    }
    // by name
    const id = names.get(web3icon.name);
    return id;
}

// download web3icons if match by chain_id or name
for (const web3icon of web3icons) {
    const id = getId(web3icon);
    if (id) {
        await download(web3icon, id);
    }
}

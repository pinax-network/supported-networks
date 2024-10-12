import fs from "fs";
import path from "path";
import { Block } from "../../typespec/blocks";
import { Chain } from "../../typespec/chains";

const base = path.join(__dirname, "..", "..", "_data");
const out = path.join(__dirname, "..", "..", "networks.json");

// read & parse blocks
const blocks: Map<string, Block> = new Map();
for (const filename of fs.readdirSync(path.join(base, "blocks"))) {
    const id = path.parse(filename).name;
    const json = JSON.parse(fs.readFileSync(path.join(base, "blocks", filename), "utf-8"));
    json.id = id;
    blocks.set(id, json);
}

// read & parse providers
const providers: Map<string, Block> = new Map();
for (const filename of fs.readdirSync(path.join(base, "providers"))) {
    const id = path.parse(filename).name;
    const json = JSON.parse(fs.readFileSync(path.join(base, "providers", filename), "utf-8"));
    providers.set(id, json);
}

// read & parse providers
const icons: Map<string, Block> = new Map();
for (const filename of fs.readdirSync(path.join(base, "icons"))) {
    const id = path.parse(filename).name;
    const json = JSON.parse(fs.readFileSync(path.join(base, "icons", filename), "utf-8"));
    json.id = id;
    icons.set(id, json);
}

// read & parse chains
const chains: Map<string, Chain> = new Map();
for (const filename of fs.readdirSync(path.join(base, "chains"))) {
    const id = path.parse(filename).name;
    const json = JSON.parse(fs.readFileSync(path.join(base, "chains", filename), "utf-8"));
    json.icon = icons.get(json.icon);
    chains.set(id, json);
}

// save to networks.json
const networks = JSON.stringify({
    blocks: Array.from(blocks.values()),
    chains: Array.from(chains.values()),
    providers: Array.from(providers.values()),
    // icons: Array.from(icons.values()),
}, null, 2);
console.log(networks);
fs.writeFileSync(out, networks)
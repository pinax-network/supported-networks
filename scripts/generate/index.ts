import fs from "fs";
import path from "path";
import { Block } from "../../typespec/blocks";
import { Network } from "../../typespec/networks";

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

// // read & parse icons
// const icons: Map<string, Block> = new Map();
// for (const filename of fs.readdirSync(path.join(base, "icons"))) {
//     const id = path.parse(filename).name;
//     const json = JSON.parse(fs.readFileSync(path.join(base, "icons", filename), "utf-8"));
//     json.id = id;
//     icons.set(id, json);
// }

// read & parse networks
const networks: Map<string, Network> = new Map();
for (const filename of fs.readdirSync(path.join(base, "networks"))) {
    const id = path.parse(filename).name;
    const json = JSON.parse(fs.readFileSync(path.join(base, "networks", filename), "utf-8"));
    // json.icon = icons.get(json.icon);
    networks.set(id, json);
}

// save to networks.json
const data = JSON.stringify({
    blocks: Array.from(blocks.values()),
    networks: Array.from(networks.values()),
    providers: Array.from(providers.values()),
    // icons: Array.from(icons.values()),
}, null, 2);
console.log(networks);
fs.writeFileSync(out, data)
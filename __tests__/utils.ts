import path from "path";
import fs from "fs";
import { Network } from "../typespec/networks";

const base = path.join(__dirname, "..", "_data");

export function getNetworks() {
    const networks = new Map<string, Network>()
    for (const filename of fs.readdirSync(path.join(base, "networks"), { recursive: true })) {
        if (typeof filename !== 'string') continue;
        if (!filename.endsWith(".json")) continue;
        const id = path.parse(filename).name;
        const json = JSON.parse(fs.readFileSync(path.join(base, "networks", filename), "utf-8"));
        networks.set(id, json);
    }
    return networks;
}

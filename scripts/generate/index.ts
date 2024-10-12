import fs from "fs";
import path from "path";

for (const dir of fs.readdirSync(path.join(__dirname, "..", "..", "_data", "blocks"))) {
    console.log(dir);
}

for (const dir of fs.readdirSync(path.join(__dirname, "..", "..", "_data", "chains"))) {
    console.log(dir);
}
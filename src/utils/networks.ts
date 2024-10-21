import fs from 'fs';
import path from 'path';
import { HttpsThegraphComSchemasV1NetworkSchemaJson as NetworkSchema} from '../types/registry';

export function getAllJsonFiles(dir: string): string[] {
    let files: string[] = [];

    for (const file of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, file);

        if (fs.statSync(fullPath).isDirectory()) {
            files = [...files, ...getAllJsonFiles(fullPath)];
        } else if (fullPath.endsWith('.json')) {
            files.push(fullPath);
        }
    }

    return files;
}

export function loadNetworks(dir: string): NetworkSchema[] {

    const files = getAllJsonFiles(dir);
    const res: NetworkSchema[] = [];
    for (const file of files) {
        const content = JSON.parse(fs.readFileSync(file, 'utf-8')) as NetworkSchema;
        res.push(content);
    }

    return res;
}

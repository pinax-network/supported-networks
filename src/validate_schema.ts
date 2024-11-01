import { getAllJsonFiles } from "./utils/networks";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";

const ERRORS: string[] = [];

async function main() {
  const [
    ,
    ,
    networksPath = "registry/networks",
    schemaPath = "schemas/registry.schema.json",
  ] = process.argv;

  const files = getAllJsonFiles(networksPath);
  if (files.length === 0) {
    process.stderr.write("No JSON files found\n");
    process.exit(1);
  }
  process.stdout.write(`Discovered ${files.length} JSON files\n`);

  const ajv = new Ajv();
  addFormats(ajv);
  const registrySchema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
  ajv.addSchema(registrySchema, "registrySchema");
  const validate = ajv.getSchema("registrySchema#/$defs/Network")!;

  for (const file of files) {
    try {
      const json = JSON.parse(fs.readFileSync(file, "utf-8"));
      if (!validate(json)) {
        ERRORS.push(
          ...validate.errors!.map(
            (e) => `File ${file} is invalid: ${e.instancePath} ${e.message}`,
          ),
        );
      } else {
        process.stdout.write(`  ${file} is valid\n`);
      }
    } catch (e) {
      ERRORS.push(`File ${file} is not a valid JSON: ${e.message}`);
    }
  }

  if (ERRORS.length > 0) {
    process.stderr.write("Validation errors:\n");
    for (const error of ERRORS) {
      process.stderr.write(`  - ${error}\n`);
    }
    process.exit(1);
  }

  process.stdout.write("All networks are valid\n");
}

await main();

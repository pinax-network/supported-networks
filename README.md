# The Graph supported networks

This repository contains a registry of networks supported by The Graph.

## Structure of the repository

- `schemas/`: Contains the schemas for the registry and network entries.
- `registry/`: Contains the networks jsons
- `src/`: Contains Typescript scripts to validate networks JSONs and generate the combined registry JSON

## Scripts usage

- `bun gen-types` - generate types from schema if schema has changed
- `bun validate-schema` - validate networks JSONs against the schema
- `bun validate` - additional logical validation of networks JSONs
- `bun generate` - generate combined registry JSON (default: `registry/registry.json`)

## Adding a chain

If you want to add a chain, i.e. to CLI or the docs
- add a chain JSON in `registry/networks`
- validate it with `bun validate`, make sure there are no errors
- generate combined registry with `bun generate`
- open a PR

## References

- [CAIP-2 chain ids](https://chainagnostic.org/CAIPs/caip-2)
- [Web3Icons](https://github.com/0xa3k5/web3icons/tree/main/raw-svgs/networks/branded)

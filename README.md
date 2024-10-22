# The Graph supported networks

This repository contains a registry of networks supported by The Graph.

## Structure of the repository

- `schemas/`: Contains the schemas for the registry and network entries.
- `registry/`: Contains the networks JSONs
- `src/`: Contains Typescript scripts to validate networks JSONs and generate the combined registry JSON

## Scripts usage

- `bun generate:types` - generate types from schema if schema has changed
- `bun validate:schema` - validate networks JSONs against the schema
- `bun validate:networks` - additional semantic validation of networks JSONs
- `bun generate:registry` - generate combined registry JSON (default: `registry/registry.generated.json`)
- `bun validate:registry` - validate generated registry against the schema

## Adding a chain

If you want to add a chain, i.e. to CLI or the docs

- add a chain network in `registry/networks`
- validate it with `bun validate`, make sure all networks JSONs are valid
- generate combined registry with `bun generate:registry`
- make sure the registry is valid with `bun validate:registry`
- format with `bun format`
- open a PR

## References

- [CAIP-2 chain ids](https://chainagnostic.org/CAIPs/caip-2)
- [Web3Icons](https://github.com/0xa3k5/web3icons/tree/main/raw-svgs/networks/branded)

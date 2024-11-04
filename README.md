# The Graph supported networks

This repository contains a registry of networks supported by The Graph.

## Structure of the repository

- `schemas/`: Contains the schema for the registry.
- `registry/`: Contains the networks JSONs and resulting
- `src/`: Contains Typescript scripts to validate networks JSONs and generate the resulting registry JSON

## Scripts usage

- `bun generate:types` - generate types from schema if schema has changed to use for validation
- `bun validate:schema` - validate networks JSONs against the schema
- `bun validate:networks` - additional semantic validation of networks JSONs, i.e. uniqueness, relations, urls, ethereum chain list, graph network, icons, etc
- `bun generate:registry` - generate resulting registry JSON
- `bun validate:registry` - validate generated registry against the schema
- `bun format` - format JSON and TS files with prettier
- `bun all` - do all

## Adding a chain

If you want to add a chain

- add a network JSON in `registry/networks` TODO: add detailed fields descriptions and best practices
- validate it with `bun validate` this will make sure all networks JSONs are valid
- generate combined registry with `bun generate:registry`
- format with `bun format`
- open a PR

## References

- [Ethereum chains list](https://github.com/ethereum-lists/chains)
- [CAIP-2 chain ids](https://chainagnostic.org/CAIPs/caip-2)
- [Web3Icons](https://github.com/0xa3k5/web3icons/tree/main/raw-svgs/networks/branded)
- [EBO subgraph](https://thegraph.com/explorer/subgraphs/4KFYqUWRTZQ9gn7GPHC6YQ2q15chJfVrX43ezYcwkgxB)
-

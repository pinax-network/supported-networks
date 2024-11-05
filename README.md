# The Graph supported networks

This repository contains a registry of networks supported by The Graph.

### Adding a chain

- add a network JSON in `registry` TODO: add detailed fields descriptions and best practices
- validate it with `bun validate` this will make sure all networks JSONs are valid
- generate combined registry with `bun generate:registry`
- format with `bun format`
- open a PR

### Structure of the repository

- `schemas/`: Contains the schema for the registry.
- `registry/`: Contains the networks JSONs and resulting registry JSON
- `src/`: Contains Typescript scripts to validate networks JSONs and generate the resulting registry JSON

### Setup

- install `bun`: https://bun.sh/
- install dependencies `bun install --no-save`
- get your free [Studio API key](https://thegraph.com/studio/apikeys/) and set it in the `.env` file - we will need it to run a few queries to do some network validation

### Scripts usage

- `bun generate:types` - generate types from schema if schema has changed to use for validation
- `bun validate:schema` - validate networks JSONs against the schema
- `bun validate:networks` - additional semantic validation of networks JSONs, i.e. uniqueness, relations, urls, ethereum chain list, graph network, icons, etc
- `bun generate:registry` - generate resulting registry JSON
- `bun validate:registry` - validate generated registry against the schema
- `bun format` - format JSON and TS files with prettier
- `bun all` - do it all

### Versioning

#### Schema Version

Published registry schema has a MAJOR.MINOR semantic version, i.e. `v1.2`

When version needs to be bumped up:

- Major version: breaking schema change, i.e. field type change, field removal
- Minor version: backward compatible schema change, i.e. new field, new enum variant

#### Registry version

Every new published registry has a MAJOR.MINOR.PATCH semantic version, i.e. `v1.2.3` where MAJOR.MINOR corresponds to the schema version

When version needs to be bumped up:

- Major/minor version: schema is updated
- Patch version: new network added, existing network entry updated

### Releases

### References

- [Ethereum chains list](https://github.com/ethereum-lists/chains)
- [CAIP-2 chain ids](https://chainagnostic.org/CAIPs/caip-2)
- [Web3Icons](https://github.com/0xa3k5/web3icons/tree/main/raw-svgs/networks/branded)
- [EBO subgraph](https://thegraph.com/explorer/subgraphs/4KFYqUWRTZQ9gn7GPHC6YQ2q15chJfVrX43ezYcwkgxB)

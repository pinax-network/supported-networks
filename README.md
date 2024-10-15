# The Graph supported networks

This repository contains a list of networks supported by The Graph. The list is used by The Graph to determine which networks are supported by the service.

Data Structure of the repository:

- `chains/`: Contains the chain definitions.
- `blocks/`: Contains the Block protobuf defintions.
- `icons/`: Contains the icons of the chains.
- `providers/`: Contains the provider definitions for The Graph services (ex: RPC, Firehose, Substreams, ...).

## Make a pull request

Once you've tested your chain, you can share it on The Graph supported networks.

## Common mistakes

- Review Typepspec definitions in `./typespec` to ensure that the chain is correctly defined.
- Ensure that the chain is correctly defined in the `./_data/chains/` directory.
- Ensure that the chain matches a valid block definition in the `./_data/blocks/` directory.
- Ensure that the chain has a valid icon in the `./_data/icons/` directory.
- Ensure that the chain has a valid provider in the `./_data/providers/` directory.

## Running tests

Test your changes by running `bun test` to ensure that your changes are correct.

## How to add a new chain?

Add the chain definition to the `./_data/chains/` directory.

```json
{
  "id": "mainnet",
  "name": "Ethereum",
  "namespace": "eip155",
  "block": "ethereum",
  "genesis_hash": "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
  "chain_id": 1,
  "network_id": 1
}
```

## How to add a new provider?

Add the provider definition to the `./_data/providers/` directory.

```json
{
    "name": "StreamingFast",
    "url": "https://www.streamingfast.io",
    "rpc": [],
    "firehose": [
        {
            "id": "mainnet",
            "url": "https://mainnet.eth.streamingfast.io:443"
        }
    ],
    "substreams": [
        {
            "id": "mainnet",
            "url": "https://mainnet.eth.streamingfast.io:443"
        }
    ]
}
```

## How to add a new block?

Add the block definition to the `./_data/blocks/` directory.

```json
{
  "type": "sf.solana.type.v1.Block",
  "url": "buf.build/streamingfast/firehose-solana"
}
```

## How to add a new icon?

Provide token SVG to <https://tokenicons.io> and add matching Graph ID to `_data/web3icons_id.json`.

```json
{
  "mainnet": "ethereum",
  "arbitrum-one": "arbitrum-one",
  ...
}

## References

- [Chain Requirements (Edge & Node)](https://thegraphfoundation.notion.site/Chain-Requirements-Edge-Node-1d7e961a7235459e852a647dcf55c6b9)
- [Chain Requirements (StreamingFast)](https://thegraphfoundation.notion.site/Chain-Requirements-StreamingFast-1c9b85883f1d4c33b62042376d24ea67)
- [Pinax Chains](https://github.com/pinax-network/chains)
- [Ethereum ChainID](https://github.com/ethereum-lists/chains) (<https://chainid.network/>)
- [DefiLlama ChainList](https://github.com/DefiLlama/chainlist/tree/main) (<https://chainlist.org/>)

## CAIP-2

- https://namespaces.chainagnostic.org/solana/caip2
- https://namespaces.chainagnostic.org/bip122/caip2
- https://namespaces.chainagnostic.org/antelope/caip2
- https://namespaces.chainagnostic.org/eip155/caip2
- https://namespaces.chainagnostic.org/cosmos/caip2
- https://namespaces.chainagnostic.org/starknet/README
- https://namespaces.chainagnostic.org/polkadot/caip2


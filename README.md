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
    "id": "ethereum",
    "name": "Ethereum Mainnet",
    "icon": "ethereum",
    "block": "ethereum",
    "chainId": 1,
    "networkId": 1
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
            "id": "ethereum",
            "url": "https://mainnet.eth.streamingfast.io:443"
        }
    ],
    "substreams": [
        {
            "id": "ethereum",
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

Add the icon to the `./_data/icons/` directory.

```json
[
    {
        "url": "ipfs://QmdwQDr6vmBtXmK2TmknkEuZNoaDqTasFdZdu3DRw8b2wt",
        "width": 1000,
        "height": 1628,
        "format": "png"
    }
]
```

## References

- [Chain Requirements (Edge & Node)](https://thegraphfoundation.notion.site/Chain-Requirements-Edge-Node-1d7e961a7235459e852a647dcf55c6b9)
- [Chain Requirements (StreamingFast)](https://thegraphfoundation.notion.site/Chain-Requirements-StreamingFast-1c9b85883f1d4c33b62042376d24ea67)
- [Pinax Chains](https://github.com/pinax-network/chains)
- [Ethereum ChainID](https://github.com/ethereum-lists/chains) (<https://chainid.network/>)
- [DefiLlama ChainList](https://github.com/DefiLlama/chainlist/tree/main) (<https://chainlist.org/>)

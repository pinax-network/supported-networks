# The Graph supported networks

This repository contains a list of networks supported by The Graph. The list is used by The Graph to determine which networks are supported by the service.

Data Structure of the repository:

- `chains/`: Contains the chain definitions.
- `blocks/`: Contains the Block protobuf defintions.
- `icons/`: Contains the icons of the chains.
- `providers/`: Contains the provider definitions for The Graph services (ex: RPC, Firehose, Substreams, ...).

## How to add a new chain?

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

```json
{
    "name": "StreamingFast",
    "url": "https://www.streamingfast.io",
    "rpc": [],
    "firehose": [
        {
            "ethereum": "https://mainnet.eth.streamingfast.io:443"
        }
    ],
    "substreams": [
        {
            "ethereum": "https://mainnet.eth.streamingfast.io:443"
        }
    ]
}
```

## How to add a new block?

```json
{
  "type": "sf.solana.type.v1.Block",
  "url": "buf.build/streamingfast/firehose-solana"
}
```

## How to add a new icon?

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

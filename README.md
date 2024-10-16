# The Graph supported networks

This repository contains a list of networks supported by The Graph. The list is used by The Graph to determine which networks are supported by the service.

Data Structure of the repository:

- `networks/`: Contains the network definitions.
- `providers/`: Contains the provider definitions for The Graph services (ex: RPC, Firehose, Substreams, ...).
- `icons/`: Contains the icons of the networks.
- `blocks.json`: Contains the Firehose block defintions.
- `services.json`: Contains the available services.

## Make a pull request

Once you've tested your chain, you can share it on The Graph supported networks.

## Common mistakes

- Review Typepspec definitions in `./typespec` to ensure that the chain is correctly defined.
- Ensure that the chain is correctly defined in the `./_data/networks/` directory.
- Ensure that the chain matches a valid block definition in the `./_data/blocks/` directory.
- Ensure that the chain has a valid icon in the `./_data/icons/` directory.
- Ensure that the chain has a valid provider in the `./_data/providers/` directory.

## Running tests

Test your changes by running `bun test` to ensure that your changes are correct.

## How to add a new network?

Add the chain definition to the `./_data/networks/` directory.

```json
{
  "id": "mainnet",
  "name": "Ethereum",
  "namespace": "eip155",
  "block": "ethereum",
  "genesis": {
    "block": {
      "number": 0,
      "hash": "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3"
    }
  },
  "chainId": 1,
  "networkId": 1
}
```

## How to add a new provider?

Add the provider definition to the `./_data/providers/` directory.

```json
{
  "id": "streamingfast",
  "name": "StreamingFast",
  "url": "https://www.streamingfast.io",
  "services": [
    {
      "type": "firehose",
      "id": "mainnet",
      "url": "https://mainnet.eth.streamingfast.io:443"
    },
    {
      "id": "mainnet",
      "type": "substreams",
      "url": "https://mainnet.eth.streamingfast.io:443"
    }
  ]
}
```

## How to add a new block?

Add the block definition to the `./_data/blocks.json` file.

```json
[
  {
    "type": "sf.solana.type.v1.Block",
    "url": "buf.build/streamingfast/firehose-solana"
  },
  ...
]
```

## How to add a new icon?

Provide SVG for network to <https://tokenicons.io> and add the icon to the `./_data/icons/` directory using the network id as the filename.

- `/_data`
  - `/icons`
    - `/branded/mainnet.svg`
    - `/mono/mainnet.svg`

## References

- [Chain Requirements (Edge & Node)](https://thegraphfoundation.notion.site/Chain-Requirements-Edge-Node-1d7e961a7235459e852a647dcf55c6b9)
- [Chain Requirements (StreamingFast)](https://thegraphfoundation.notion.site/Chain-Requirements-StreamingFast-1c9b85883f1d4c33b62042376d24ea67)
- [Pinax Chains](https://github.com/pinax-network/chains)
- [Ethereum ChainID](https://github.com/ethereum-lists/chains) (<https://chainid.network/>)
- [DefiLlama ChainList](https://github.com/DefiLlama/chainlist/tree/main) (<https://chainlist.org/>)

## CAIP-2

- <https://namespaces.chainagnostic.org/solana/caip2>
- <https://namespaces.chainagnostic.org/bip122/caip2>
- <https://namespaces.chainagnostic.org/antelope/caip2>
- <https://namespaces.chainagnostic.org/eip155/caip2>
- <https://namespaces.chainagnostic.org/cosmos/caip2>
- <https://namespaces.chainagnostic.org/starknet/README>
- <https://namespaces.chainagnostic.org/polkadot/caip2>

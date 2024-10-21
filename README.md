# The Graph supported networks

This repository contains a list of networks supported by The Graph. The list is used by The Graph to determine which networks are supported by the service.

Data Structure of the repository:

- `networks/`: Contains the network definitions.
- `blocks.json`: Contains the Firehose block defintions.

## Make a pull request

Once you've tested your chain, you can share it on The Graph supported networks.

## Common mistakes

- Review Typepspec definitions in `./typespec` to ensure that the network is correctly defined.
- Ensure that the network is correctly defined in the `./_data/networks/` directory.
- Ensure that the network matches a valid block definition in the `./_data/blocks.json` file.

## Running tests

Test your changes by running `bun test` to ensure that your changes are correct.

## How to add a new network?

Add the chain definition to the `./_data/networks/` directory.

```json
{
  "graphCliName": "mainnet",
  "name": "Ethereum",
  "aliases": [
    "ethereum"
  ],
  "namespace": "eip155",
  "blockType": "ethereum",
  "genesisBlockID": "d4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
  "genesisBlockNumber": 0,
  "chainId": 1,
  "networkId": 1,
  "caip2": "eip155:1",
  "web3icons": "ethereum"
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

Provide SVG for missing networks to <https://tokenicons.io>.

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

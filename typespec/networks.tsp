namespace TheGraph.Networks;

model Network {
  // The Graph CLI ID
  graphCliName: string;

  // Chain name
  name: string;

  // Chain known aliases
  aliases: string[];

  // CAIP-2 Namespace
  `namespace`: string;

  // Firehose block type
  blockType: string;

  // Genesis Block ID
  genesisBlockID: string;

  // Genesis Block Number
  genesisBlockNumber: int64;

  // CAIP-2 Chain ID
  chainId: string | int64;

  // CAIP-2 ID
  caip2: string;

  // Web3Icons ID
  web3icons: string;

  // Is Testnet?
  testnet?: boolean;

  // Is Beacon Chain?
  beacon?: boolean;
}

model NetworkEIP1155 extends Network {
  // Transaction signature process uses the chain ID
  chainId: int64;

  // Peer-to-peer communication between nodes uses the network ID,
  networkId: int64;
}

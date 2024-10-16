namespace TheGraph.Networks;

model Network {
  // The Graph CLI network ID
  id: string;

  // Chain name
  name: string;

  // Firehose block type
  blockType: string;

  // CAIP-2 Namespace
  `namespace`: string;

  // Genesis information
  genesis: Genesis;
}

model NetworkEIP1155 extends Network {
  // Transaction signature process uses the chain ID
  chainId: int64;

  // Peer-to-peer communication between nodes uses the network ID,
  networkId: int64;
}

model Genesis {
  block: {
    number: int64;
    hash: string;
  };
  hash?: string;
}

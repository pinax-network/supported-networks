namespace TheGraph.Chains;

model Chain {
  // The Graph chain ID
  id: string;

  // Chain name
  name: string;

  // Icon for the chain
  icon: string;

  // Firehose block type
  block: string;

  // Transaction signature process uses the chain ID
  chainId: number;

  // Peer-to-peer communication between nodes uses the network ID,
  networkId: number;
}

namespace TheGraph.Chains;

model Chain {
  // The Graph chain ID
  id: string;

  // Chain name
  name: string;

  // Firehose block type
  block: string;

  // Transaction signature process uses the chain ID
  chain_id?: int64;

  // Peer-to-peer communication between nodes uses the network ID,
  network_id?: int64;
}

export interface Network {
  // The Graph chain ID
  id: string;

  // Chain name
  name: string;

  // Firehose block type
  block: string;

  // Transaction signature process uses the chain ID
  chain_id: number;

  // Peer-to-peer communication between nodes uses the network ID,
  network_id?: number;
}

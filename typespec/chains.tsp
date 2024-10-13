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

  // CoinGecko ID
  // https://docs.coingecko.com/v3.0.1/reference/coins-list
  gecko_id?: string;

  // CoinMarketCap ID
  // https://coinmarketcap.com/
  cmc_id?: string;

  // Web3 Icon name
  // https://tokenicons.io
  web3icons_id?: string;
}

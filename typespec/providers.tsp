namespace TheGraph.Providers;

model Service {
  // Graph ID for the service
  id: string;

  // URL endpoint for the service
  url: string;
}

model Provider {
  // Name of the provider
  name: string;

  // URL of the provider
  url: string;

  // RPC services
  rpc: Service[];

  // Firehose services
  firehose: Service[];

  // Substreams services
  substreams: Service[];
}
namespace TheGraph.Providers;

model Service {
  // Graph ID for the service
  id: string;

  // Type of service
  type: string;

  // URL endpoint for the service
  url: string;
}

model Provider {
  // ID of provider
  id: string;

  // Name of the provider
  name: string;

  // URL of the provider
  url: string;

  // The Graph Services
  services: Service[];
}

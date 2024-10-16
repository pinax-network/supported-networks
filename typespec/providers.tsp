import "./services.tsp";

namespace TheGraph.Providers;

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

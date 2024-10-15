export interface Service {
  // Graph ID for the service
  id: string;

  // Type of service
  type: string;

  // URL endpoint for the service
  url: string;
}

export interface Provider {
  // Name of the provider
  name: string;

  // URL of the provider
  url: string;

  // The Graph Services
  services: Service[];
}
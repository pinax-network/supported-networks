export interface Block {
    // Protobuf block type
    type: string;

    // Protobuf buf.build URL
    url: string;
}

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
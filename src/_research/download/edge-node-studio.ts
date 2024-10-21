export async function fetchStudioDeploy(): Promise<StudioDeploy> {
    const data = { "jsonrpc": "2.0", "method": "chain_list", "id": 1 };
    const response = await fetch("https://api.studio.thegraph.com/deploy", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } })
    return response.json();
}

export interface StudioDeploy {
    jsonrpc: string;
    id: number;
    result: {
        hostedService: string[];
        studio: string[];
    }
}


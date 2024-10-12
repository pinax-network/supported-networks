// https://github.com/DefiLlama/chainlist
export async function fetchLlamaChains(): Promise<LLamaChains[]> {
    const response = await fetch("https://api.llama.fi/chains");
    return response.json();
}

export interface LLamaChains {
    gecko_id?: string
    tvl: number
    tokenSymbol?: string
    cmcId?: string
    name: string
    chainId: any
}


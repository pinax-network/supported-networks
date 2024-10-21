// https://docs.coingecko.com/v3.0.1/reference/coins-list
export async function fetchCoinGeckoList(): Promise<CoinGeckoList[]> {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
    return response.json();
}

export interface CoinGeckoList {
    id: string
    symbol: string
    name: string
}
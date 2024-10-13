// https://docs.coingecko.com/v3.0.1/reference/coins-list
export async function fetchWeb3Icons(): Promise<Web3Icons[]> {
    const response = await fetch("https://github.com/0xa3k5/web3icons/raw/refs/heads/main/packages/core/src/metadata/networks.json");
    return response.json();
}

export interface Web3Icons {
    id: string;
    name: string;
    variants: ("branded" | "mono")[];
    nativeCoinId: string;
    shortName: string;
}

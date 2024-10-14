// https://docs.coingecko.com/v3.0.1/reference/coins-list
export async function fetchWeb3IconsNetworks(): Promise<Web3IconsNetwork[]> {
    const response = await fetch("https://github.com/0xa3k5/web3icons/raw/refs/heads/main/packages/core/src/metadata/networks.json");
    return response.json();
}

export async function fetchWeb3IconsTokens(): Promise<Web3IconsToken[]> {
    const response = await fetch("https://github.com/0xa3k5/web3icons/raw/refs/heads/main/packages/core/src/metadata/tokens.json");
    return response.json();
}

type Variants = "branded" | "mono";
export interface Web3IconsNetwork {
    id: string;
    name: string;
    variants: Variants[];
    nativeCoinId: string;
    shortName: string;
}
export interface Web3IconsToken {
    id: string
    symbol: string
    name: string
    variants: Variants[]
    addresses: { [key: string]: string }
    marketCapRank: number
}

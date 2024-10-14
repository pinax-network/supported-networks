export function generateCAIP2(namespace: string, chain_id: string | number): string {
    if (typeof chain_id === "number") {
        return `${namespace}:${chain_id}`;
    }
    // Note that the chain_id value returned must be substringed to the first 32 characters.
    const prefix = chain_id.substring(0, 32);
    return `${namespace}:${prefix}`;
}
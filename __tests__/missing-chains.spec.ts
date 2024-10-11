import { expect, test, it } from "bun:test";
import chains from "../chains/ethereum";

interface StudioDeploy {
    jsonrpc: string;
    id: number;
    result: {
        hostedService: string[];
        studio: string[];
    }
}

async function fetchStudioDeploy(): Promise<StudioDeploy> {
    const data = { "jsonrpc": "2.0", "method": "chain_list", "id": 1 };
    const response = await fetch("https://api.studio.thegraph.com/deploy", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } })
    return response.json();
}

test("missing chains", async () => {
    const studioDeploy = await fetchStudioDeploy();
    it("should not have missing chains", async () => {
        const missingChains = studioDeploy.result.studio.filter(chain => !studioDeploy.result.hostedService.includes(chain));
        expect(missingChains).toEqual([]);
    });
});


// console.log(await fetchStudioDeploy())
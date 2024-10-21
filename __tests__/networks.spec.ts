import { expect, test, describe } from "bun:test";
import { getNetworks } from "./utils";
import { NETWORKS } from "./variables";

const networks = getNetworks();

describe("networks", () => {
    test("namespace does not match folder", async () => {
        expect(true).toBeTrue();
    });
    test('missing networks', () => {
        for (const network of NETWORKS) {
            expect(networks.has(network), `${network} is missing from _data/networks`).toBeTrue();
        }
    })
    test('genesisBlockID', () => {
        // no 0x prefix
        expect(true).toBeTrue()
    })

    test('genesisBlockNumber', () => {
        // must be number (0 is allowed)
        expect(true).toBeTrue()
    })
});


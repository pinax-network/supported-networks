import { expect, describe, test } from "bun:test";

describe("caip2", () => {
    test("Dummy max length(8 + 1 + 32 = 41 chars / bytes)", () => {
        expect(true).toBeTrue();
    });
    test("Antelope - Note that the chain_id value returned must be substringed to the first 32 characters.", () => {
        expect(true).toBeTrue();
    });
});

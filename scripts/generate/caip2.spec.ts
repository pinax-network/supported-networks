import { describe, expect, test } from "bun:test";
import { generateCAIP2 } from "./caip2";

describe("generate::caip2", () => {
    test("antelope", () => {
        expect(generateCAIP2("antelope", "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4")).toBe("antelope:1064487b3cd1a897ce03ae5b6a865651");
    });
    test("eip155", () => {
        expect(generateCAIP2("eip155", 1)).toBe("eip155:1");
    });
    test("solana", () => {
        expect(generateCAIP2("solana", "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d")).toBe("solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp");
    });
})

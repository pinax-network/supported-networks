// https://www.npmjs.com/package/@edgeandnode/common?activeTab=code
// ./dist/index.mjs
var ChainProductStatus = /* @__PURE__ */ ((ChainProductStatus2) => {
  ChainProductStatus2["BLOCKED"] = "BLOCKED";
  ChainProductStatus2["ALLOWED"] = "ALLOWED";
  return ChainProductStatus2;
})(ChainProductStatus || {});

const studioAllowedStatus = {
  hostedService: ChainProductStatus.BLOCKED,
  studio: ChainProductStatus.ALLOWED
};
({
  hostedService: ChainProductStatus.ALLOWED,
  studio: ChainProductStatus.BLOCKED
});
const fullyBlockedStatus = {
  hostedService: ChainProductStatus.BLOCKED,
  studio: ChainProductStatus.BLOCKED
};
const fullyAllowedStatus = {
  hostedService: ChainProductStatus.ALLOWED,
  studio: ChainProductStatus.ALLOWED
};

const untypedDefChain = {
  uid: "evm-1",
  network: "evm",
  chainId: 1,
  chainLikenessOrder: 1,
  name: "Ethereum",
  graphCliName: "mainnet",
  aliases: ["homestead"],
  testnet: false,
  substreams: ["studio", "network"],
  productDeployStatus: fullyAllowedStatus,
  networkPublishChainAllowStatusMap: /* @__PURE__ */ new Map([
    ["evm-1", "ALLOWED"],
    ["evm-42161", "ALLOWED"],
    ["evm-11155111", "ALLOWED"],
    ["evm-421614", "ALLOWED"]
  ]),
  environmentStatus: "all"
};

export const untypedSupportedNetworkMap = /* @__PURE__ */ new Map([
  [
    "evm",
    {
      id: "evm",
      name: "Ethereum",
      order: 1,
      chains: /* @__PURE__ */ new Set([
        untypedDefChain,
        {
          uid: "evm-4",
          network: "evm",
          chainId: 4,
          chainLikenessOrder: 2,
          name: "Rinkeby",
          graphCliName: "rinkeby",
          testnet: true,
          notes: "deprecated Q2/Q3 2022",
          productDeployStatus: fullyBlockedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-5",
          network: "evm",
          chainId: 5,
          chainLikenessOrder: 3,
          name: "Ethereum Goerli",
          graphCliName: "goerli",
          aliases: [
            "goerli"
          ],
          testnet: true,
          productDeployStatus: fullyBlockedStatus,
          notes: "deprecated Q1 2024",
          networkPublishChainAllowStatusMap: /* @__PURE__ */ new Map([
            [
              "evm-1",
              "BLOCKED"
            ],
            [
              "evm-42161",
              "BLOCKED"
            ],
            [
              "evm-11155111",
              "BLOCKED"
            ],
            [
              "evm-421614",
              "BLOCKED"
            ]
          ]),
          environmentStatus: "all"
        },
        {
          uid: "evm-10",
          network: "evm",
          chainId: 10,
          chainLikenessOrder: 4,
          name: "Optimism",
          graphCliName: "optimism",
          testnet: false,
          substreams: [
            "studio"
          ],
          productDeployStatus: fullyAllowedStatus,
          networkPublishChainAllowStatusMap: /* @__PURE__ */ new Map([
            [
              "evm-1",
              "BLOCKED"
            ],
            [
              "evm-42161",
              "BLOCKED"
            ],
            [
              "evm-11155111",
              "ALLOWED"
            ],
            [
              "evm-421614",
              "ALLOWED"
            ]
          ]),
          environmentStatus: "all"
        },
        {
          uid: "evm-11155420",
          network: "evm",
          chainId: 11155420,
          chainLikenessOrder: 46,
          name: "Optimism Sepolia",
          graphCliName: "optimism-sepolia",
          testnet: true,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-56",
          network: "evm",
          chainId: 56,
          chainLikenessOrder: 7,
          name: "BSC",
          graphCliName: "bsc",
          aliases: [
            "bsc"
          ],
          testnet: false,
          substreams: [
            "studio"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-69",
          network: "evm",
          chainId: 69,
          chainLikenessOrder: 5,
          name: "Optimism Kovan",
          graphCliName: "optimism-kovan",
          testnet: true,
          productDeployStatus: fullyBlockedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-97",
          network: "evm",
          chainId: 97,
          chainLikenessOrder: 8,
          name: "BSC Chapel",
          graphCliName: "chapel",
          testnet: true,
          aliases: [
            "BSC Chapel Testnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-99",
          network: "evm",
          chainId: 99,
          chainLikenessOrder: 9,
          name: "POA-Core",
          graphCliName: "poa-core",
          testnet: false,
          productDeployStatus: fullyBlockedStatus,
          notes: "deprecated Q2 2024",
          environmentStatus: "all"
        },
        {
          uid: "evm-100",
          network: "evm",
          chainId: 100,
          chainLikenessOrder: 11,
          name: "Gnosis Chain",
          graphCliName: "gnosis",
          aliases: [
            "xdai"
          ],
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          networkPublishChainAllowStatusMap: /* @__PURE__ */ new Map([
            [
              "evm-1",
              "ALLOWED"
            ],
            [
              "evm-42161",
              "ALLOWED"
            ],
            [
              "evm-11155111",
              "ALLOWED"
            ],
            [
              "evm-421614",
              "ALLOWED"
            ]
          ]),
          environmentStatus: "all"
        },
        {
          uid: "evm-122",
          network: "evm",
          chainId: 122,
          chainLikenessOrder: 12,
          name: "Fuse",
          graphCliName: "fuse",
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-137",
          network: "evm",
          chainId: 137,
          chainLikenessOrder: 13,
          name: "Polygon",
          graphCliName: "matic",
          testnet: false,
          substreams: [
            "studio"
          ],
          notes: "formerly matic",
          aliases: [
            "Polygon Mainnet",
            "Matic"
          ],
          productDeployStatus: fullyAllowedStatus,
          networkPublishChainAllowStatusMap: /* @__PURE__ */ new Map([
            [
              "evm-1",
              "ALLOWED"
            ],
            [
              "evm-42161",
              "ALLOWED"
            ],
            [
              "evm-11155111",
              "ALLOWED"
            ],
            [
              "evm-421614",
              "ALLOWED"
            ]
          ]),
          environmentStatus: "all"
        },
        {
          uid: "evm-250",
          network: "evm",
          chainId: 250,
          chainLikenessOrder: 15,
          name: "Fantom Opera",
          graphCliName: "fantom",
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          networkPublishChainAllowStatusMap: /* @__PURE__ */ new Map([
            [
              "evm-1",
              "ALLOWED"
            ],
            [
              "evm-42161",
              "ALLOWED"
            ],
            [
              "evm-11155111",
              "ALLOWED"
            ],
            [
              "evm-421614",
              "ALLOWED"
            ]
          ]),
          environmentStatus: "all"
        },
        {
          uid: "evm-280",
          network: "evm",
          chainId: 280,
          chainLikenessOrder: 17,
          name: "zkSync Era Testnet",
          graphCliName: "zksync-era-testnet",
          testnet: true,
          aliases: [
            "zkSync era testnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-288",
          network: "evm",
          chainId: 288,
          chainLikenessOrder: 18,
          name: "Boba",
          graphCliName: "boba",
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-420",
          network: "evm",
          chainId: 420,
          chainLikenessOrder: 6,
          name: "Optimism Goerli",
          graphCliName: "optimism-goerli",
          testnet: true,
          productDeployStatus: fullyBlockedStatus,
          notes: "deprecated Q1 2024",
          environmentStatus: "all"
        },
        {
          uid: "evm-1023",
          network: "evm",
          chainId: 1023,
          chainLikenessOrder: 19,
          name: "Clover",
          graphCliName: "clover",
          testnet: true,
          aliases: [
            "Clover Testnet"
          ],
          productDeployStatus: fullyBlockedStatus,
          notes: "deprecated Q2 2024",
          environmentStatus: "all"
        },
        {
          uid: "evm-1284",
          network: "evm",
          chainId: 1284,
          chainLikenessOrder: 20,
          name: "Moonbeam",
          graphCliName: "moonbeam",
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-1285",
          network: "evm",
          chainId: 1285,
          chainLikenessOrder: 21,
          name: "Moonriver",
          graphCliName: "moonriver",
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-1287",
          network: "evm",
          chainId: 1287,
          chainLikenessOrder: 22,
          name: "Moonbase Alpha",
          graphCliName: "mbase",
          aliases: [
            "moonbase"
          ],
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-4002",
          network: "evm",
          chainId: 4002,
          chainLikenessOrder: 16,
          name: "Fantom",
          graphCliName: "fantom-testnet",
          testnet: true,
          aliases: [
            "Fantom Testnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-42161",
          network: "evm",
          chainId: 42161,
          chainLikenessOrder: 23,
          name: "Arbitrum One",
          graphCliName: "arbitrum-one",
          aliases: [
            "arbitrum"
          ],
          testnet: false,
          substreams: [
            "studio"
          ],
          productDeployStatus: fullyAllowedStatus,
          networkPublishChainAllowStatusMap: /* @__PURE__ */ new Map([
            [
              "evm-1",
              "ALLOWED"
            ],
            [
              "evm-42161",
              "ALLOWED"
            ],
            [
              "evm-421614",
              "BLOCKED"
            ]
          ]),
          environmentStatus: "all"
        },
        {
          uid: "evm-421613",
          network: "evm",
          chainId: 421613,
          chainLikenessOrder: 24,
          name: "Arbitrum Goerli",
          graphCliName: "arbitrum-goerli",
          testnet: true,
          productDeployStatus: fullyBlockedStatus,
          notes: "deprecated Q1 2024",
          environmentStatus: "all"
        },
        {
          uid: "evm-42220",
          network: "evm",
          chainId: 42220,
          chainLikenessOrder: 26,
          name: "Celo",
          graphCliName: "celo",
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          networkPublishChainAllowStatusMap: /* @__PURE__ */ new Map([
            [
              "evm-1",
              "ALLOWED"
            ],
            [
              "evm-42161",
              "ALLOWED"
            ],
            [
              "evm-421614",
              "BLOCKED"
            ]
          ]),
          environmentStatus: "all"
        },
        {
          uid: "evm-43113",
          network: "evm",
          chainId: 43113,
          chainLikenessOrder: 29,
          name: "Avalanche Fuji",
          graphCliName: "fuji",
          testnet: true,
          aliases: [
            "Avalanche Fuji Testnet",
            "Avalanche Testnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-43114",
          network: "evm",
          chainId: 43114,
          chainLikenessOrder: 28,
          name: "Avalanche",
          graphCliName: "avalanche",
          testnet: false,
          aliases: [
            "Avalanche Mainnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          networkPublishChainAllowStatusMap: /* @__PURE__ */ new Map([
            [
              "evm-1",
              "ALLOWED"
            ],
            [
              "evm-42161",
              "ALLOWED"
            ],
            [
              "evm-421614",
              "BLOCKED"
            ]
          ]),
          substreams: [
            "studio",
            "network"
          ],
          environmentStatus: "all"
        },
        {
          uid: "evm-44787",
          network: "evm",
          chainId: 44787,
          chainLikenessOrder: 27,
          name: "Celo Alfajores",
          graphCliName: "celo-alfajores",
          testnet: true,
          aliases: [
            "Celo Alfajores Testnet",
            "Celo Testnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-80001",
          network: "evm",
          chainId: 80001,
          chainLikenessOrder: 14,
          name: "Mumbai",
          graphCliName: "mumbai",
          testnet: true,
          notes: "mumbai - formerly matic testnet, deprecated Q2 2024",
          aliases: [
            "Polygon Testnet",
            "Matic Testnet"
          ],
          productDeployStatus: fullyBlockedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-17000",
          network: "evm",
          chainId: 17e3,
          chainLikenessOrder: 49,
          name: "Holesky",
          graphCliName: "holesky",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-421611",
          network: "evm",
          chainId: 421611,
          chainLikenessOrder: 25,
          name: "Arbitrum Rinkeby",
          graphCliName: "arbitrum-rinkeby",
          testnet: true,
          notes: "deprecated Q2/Q3 2022",
          productDeployStatus: fullyBlockedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-1313161554",
          network: "evm",
          chainId: 1313161554,
          chainLikenessOrder: 30,
          name: "Aurora",
          graphCliName: "aurora",
          testnet: false,
          aliases: [
            "Aurora Mainnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-1313161555",
          network: "evm",
          chainId: 1313161555,
          chainLikenessOrder: 31,
          name: "Aurora",
          graphCliName: "aurora-testnet",
          testnet: true,
          aliases: [
            "Aurora Testnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-1666600000",
          network: "evm",
          chainId: 16666e5,
          chainLikenessOrder: 32,
          name: "Harmony",
          graphCliName: "harmony",
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-84531",
          network: "evm",
          chainId: 84531,
          chainLikenessOrder: 41,
          name: "Base",
          graphCliName: "base-testnet",
          testnet: true,
          productDeployStatus: fullyBlockedStatus,
          notes: "deprecated Q1 2024",
          environmentStatus: "all"
        },
        {
          uid: "evm-59141",
          network: "evm",
          chainId: 59141,
          chainLikenessOrder: 42,
          name: "Linea Sepolia",
          graphCliName: "linea-sepolia",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-100100",
          network: "evm",
          chainId: 100100,
          chainLikenessOrder: 43,
          name: "Gnosis Chiado",
          graphCliName: "gnosis-chiado",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-919",
          network: "evm",
          chainId: 919,
          chainLikenessOrder: 44,
          name: "Mode Sepolia",
          graphCliName: "mode-sepolia",
          testnet: true,
          productDeployStatus: fullyAllowedStatus,
          notes: "enabled 2024-05",
          environmentStatus: "all"
        },
        {
          uid: "evm-34443",
          network: "evm",
          chainId: 34443,
          chainLikenessOrder: 45,
          name: "Mode",
          graphCliName: "mode-mainnet",
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          notes: "enabled 2024-05",
          environmentStatus: "all"
        },
        {
          uid: "evm-84532",
          network: "evm",
          chainId: 84532,
          chainLikenessOrder: 48,
          name: "Base Sepolia",
          graphCliName: "base-sepolia",
          testnet: true,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-300",
          network: "evm",
          chainId: 300,
          chainLikenessOrder: 48,
          name: "zkSync Sepolia",
          graphCliName: "zksync-era-sepolia",
          testnet: true,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-1101",
          network: "evm",
          chainId: 1101,
          chainLikenessOrder: 33,
          name: "Polygon zkEVM",
          graphCliName: "polygon-zkevm",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-324",
          network: "evm",
          chainId: 324,
          chainLikenessOrder: 42,
          name: "zkSync Era",
          graphCliName: "zksync-era",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-11155111",
          network: "evm",
          chainId: 11155111,
          chainLikenessOrder: 43,
          name: "Ethereum Sepolia",
          graphCliName: "sepolia",
          testnet: true,
          substreams: [
            "studio"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-421614",
          network: "evm",
          chainId: 421614,
          chainLikenessOrder: 44,
          name: "Arbitrum Sepolia",
          graphCliName: "arbitrum-sepolia",
          testnet: true,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-1442",
          network: "evm",
          chainId: 1442,
          chainLikenessOrder: 33,
          name: "Polygon zkEVM Testnet",
          graphCliName: "polygon-zkevm-testnet",
          testnet: true,
          productDeployStatus: fullyBlockedStatus,
          notes: "deprecated Q2 2024",
          environmentStatus: "all"
        },
        {
          uid: "evm-59144",
          network: "evm",
          chainId: 59144,
          chainLikenessOrder: 64,
          name: "Linea Mainnet",
          graphCliName: "linea",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-59140",
          network: "evm",
          chainId: 59140,
          chainLikenessOrder: 63,
          name: "Linea Goerli",
          graphCliName: "linea-goerli",
          testnet: true,
          productDeployStatus: fullyBlockedStatus,
          notes: "deprecated Q2 2024",
          environmentStatus: "all"
        },
        {
          uid: "evm-8453",
          network: "evm",
          chainId: 8453,
          chainLikenessOrder: 44,
          name: "Base Mainnet",
          graphCliName: "base",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-534351",
          network: "evm",
          chainId: 534351,
          chainLikenessOrder: 45,
          name: "Scroll Sepolia",
          graphCliName: "scroll-sepolia",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-534352",
          network: "evm",
          chainId: 534352,
          chainLikenessOrder: 46,
          name: "Scroll Mainnet",
          graphCliName: "scroll",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-12611",
          network: "evm",
          chainId: 12611,
          chainLikenessOrder: 47,
          name: "Astar zkEvm Sepolia",
          graphCliName: "astar-zkevm-sepolia",
          testnet: true,
          productDeployStatus: fullyBlockedStatus,
          notes: "deprecated Q2 2024",
          environmentStatus: "all"
        },
        {
          uid: "evm-81457",
          network: "evm",
          chainId: 81457,
          chainLikenessOrder: 47,
          name: "Blast Mainnet",
          graphCliName: "blast-mainnet",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-3776",
          network: "evm",
          chainId: 3776,
          chainLikenessOrder: 47,
          name: "Astar zkEvm Mainnet",
          graphCliName: "astar-zkevm-mainnet",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-713715",
          network: "evm",
          chainId: 713715,
          chainLikenessOrder: 47,
          name: "Sei Testnet",
          graphCliName: "sei-testnet",
          testnet: true,
          productDeployStatus: fullyBlockedStatus,
          notes: "deprecated Q3 2024",
          environmentStatus: "all"
        },
        {
          uid: "evm-168587773",
          network: "evm",
          chainId: 168587773,
          chainLikenessOrder: 48,
          name: "Blast Testnet",
          graphCliName: "blast-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-128123",
          network: "evm",
          chainId: 128123,
          chainLikenessOrder: 65,
          name: "Etherlink Testnet",
          graphCliName: "etherlink-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-195",
          network: "evm",
          chainId: 195,
          chainLikenessOrder: 66,
          name: "X Layer Sepolia",
          graphCliName: "xlayer-sepolia",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-196",
          network: "evm",
          chainId: 196,
          chainLikenessOrder: 67,
          name: "X Layer Mainnet",
          graphCliName: "xlayer-mainnet",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-80002",
          network: "evm",
          chainId: 80002,
          chainLikenessOrder: 68,
          name: "Polygon Amoy",
          graphCliName: "polygon-amoy",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-6038361",
          network: "evm",
          chainId: 6038361,
          chainLikenessOrder: 70,
          name: "zKyoto Testnet",
          graphCliName: "zkyoto-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-2442",
          network: "evm",
          chainId: 2442,
          chainLikenessOrder: 71,
          name: "Polygon Cardona Testnet",
          graphCliName: "polygon-zkevm-cardona",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-1329",
          network: "evm",
          chainId: 1329,
          chainLikenessOrder: 72,
          name: "Sei Mainnet",
          graphCliName: "sei-mainnet",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-30",
          network: "evm",
          chainId: 30,
          chainLikenessOrder: 73,
          name: "Rootstock Mainnet",
          graphCliName: "rootstock",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-4689",
          network: "evm",
          chainId: 4689,
          chainLikenessOrder: 74,
          name: "IoTeX Mainnet",
          graphCliName: "iotex",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-1328",
          network: "evm",
          chainId: 1328,
          chainLikenessOrder: 75,
          name: "Sei Atlantic",
          graphCliName: "sei-atlantic",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-1625",
          network: "evm",
          chainId: 1625,
          chainLikenessOrder: 76,
          name: "Gravity Mainnet",
          graphCliName: "gravity-mainnet",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-13505",
          network: "evm",
          chainId: 13505,
          chainLikenessOrder: 77,
          name: "Gravity Testnet",
          graphCliName: "gravity-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-42793",
          network: "evm",
          chainId: 42793,
          chainLikenessOrder: 78,
          name: "Etherlink Mainnet",
          graphCliName: "etherlink-mainnet",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-4690",
          network: "evm",
          chainId: 4690,
          chainLikenessOrder: 79,
          name: "IoTeX Testnet",
          graphCliName: "iotex-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "evm-47763",
          network: "evm",
          chainId: 47763,
          chainLikenessOrder: 80,
          name: "Neo X Mainnet",
          graphCliName: "neox",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-12227332",
          network: "evm",
          chainId: 12227332,
          chainLikenessOrder: 81,
          name: "Neo X Testnet",
          graphCliName: "neox-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-42170",
          network: "evm",
          chainId: 42170,
          chainLikenessOrder: 82,
          name: "Arbitrum Nova",
          graphCliName: "arbitrum-nova",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-1946",
          network: "evm",
          chainId: 1946,
          chainLikenessOrder: 83,
          name: "Soneium Testnet",
          graphCliName: "soneium-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-88888",
          network: "evm",
          chainId: 88888,
          chainLikenessOrder: 84,
          name: "Chiliz Chain",
          graphCliName: "chiliz",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-123",
          network: "evm",
          chainId: 123,
          chainLikenessOrder: 85,
          name: "Fuse Testnet",
          graphCliName: "fuse-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-28882",
          network: "evm",
          chainId: 28882,
          chainLikenessOrder: 86,
          name: "Boba Testnet",
          graphCliName: "boba-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-56288",
          network: "evm",
          chainId: 56288,
          chainLikenessOrder: 87,
          name: "Boba BNB",
          graphCliName: "boba-bnb",
          testnet: false,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-9728",
          network: "evm",
          chainId: 9728,
          chainLikenessOrder: 88,
          name: "Boba BNB Testnet",
          graphCliName: "boba-bnb-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-88882",
          network: "evm",
          chainId: 88882,
          chainLikenessOrder: 89,
          name: "Chiliz Testnet",
          graphCliName: "chiliz-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-31",
          network: "evm",
          chainId: 31,
          chainLikenessOrder: 90,
          name: "Rootstock Testnet",
          graphCliName: "rootstock-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        },
        {
          uid: "evm-1301",
          network: "evm",
          chainId: 1301,
          chainLikenessOrder: 90,
          name: "Unichain Testnet",
          graphCliName: "unichain-testnet",
          testnet: true,
          productDeployStatus: studioAllowedStatus,
          environmentStatus: "all",
          studioHosted: false
        }
      ])
    }
  ],
  [
    "near",
    {
      id: "near",
      name: "NEAR",
      order: 2,
      chains: /* @__PURE__ */ new Set([
        {
          uid: "near-1",
          network: "near",
          chainId: 1,
          chainLikenessOrder: 34,
          name: "NEAR",
          graphCliName: "near-mainnet",
          testnet: false,
          aliases: [
            "NEAR Mainnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "near-2",
          network: "near",
          chainId: 2,
          chainLikenessOrder: 35,
          name: "NEAR",
          graphCliName: "near-testnet",
          testnet: true,
          aliases: [
            "NEAR Testnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        }
      ])
    }
  ],
  [
    "cosmos",
    {
      id: "cosmos",
      name: "Cosmos",
      order: 3,
      chains: /* @__PURE__ */ new Set([
        {
          uid: "cosmos-1",
          network: "cosmos",
          chainId: 1,
          chainLikenessOrder: 36,
          name: "Cosmos",
          graphCliName: "cosmoshub-4",
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "cosmos-2",
          network: "cosmos",
          chainId: 2,
          chainLikenessOrder: 37,
          name: "Cosmos Hub",
          graphCliName: "theta-testnet-001",
          testnet: true,
          aliases: [
            "Cosmos Hub Testnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        }
      ])
    }
  ],
  [
    "osmosis",
    {
      id: "osmosis",
      name: "Osmosis",
      order: 4,
      chains: /* @__PURE__ */ new Set([
        {
          uid: "osmosis-1",
          network: "osmosis",
          chainId: 1,
          chainLikenessOrder: 39,
          name: "Osmosis",
          graphCliName: "osmosis-1",
          testnet: false,
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        },
        {
          uid: "osmosis-4",
          network: "osmosis",
          chainId: 2,
          chainLikenessOrder: 40,
          name: "Osmosis",
          graphCliName: "osmo-test-4",
          testnet: true,
          aliases: [
            "Osmosis Testnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        }
      ])
    }
  ],
  [
    "ar",
    {
      id: "ar",
      name: "Arweave",
      order: 5,
      chains: /* @__PURE__ */ new Set([
        {
          uid: "ar-1",
          network: "ar",
          chainId: 1,
          chainLikenessOrder: 33,
          name: "Arweave",
          graphCliName: "arweave-mainnet",
          testnet: false,
          aliases: [
            "Arweave Mainnet"
          ],
          productDeployStatus: fullyAllowedStatus,
          environmentStatus: "all"
        }
      ])
    }
  ],
  [
    "btc",
    {
      id: "btc",
      name: "Bitcoin",
      order: 6,
      chains: /* @__PURE__ */ new Set([
        {
          uid: "btc-1",
          network: "btc",
          chainId: 1,
          chainLikenessOrder: 33,
          name: "Bitcoin",
          graphCliName: "btc",
          testnet: false,
          aliases: [
            "Bitcoin"
          ],
          productDeployStatus: studioAllowedStatus,
          substreams: [
            "studio",
            "network"
          ],
          environmentStatus: "all"
        }
      ])
    }
  ],
  [
    "solana",
    {
      id: "solana",
      name: "Solana",
      order: 7,
      chains: /* @__PURE__ */ new Set([
        {
          uid: "solana-1",
          network: "solana",
          chainId: 1,
          chainLikenessOrder: 33,
          name: "Solana",
          graphCliName: "solana-mainnet-beta",
          testnet: false,
          aliases: [
            "Solana Mainnet Beta"
          ],
          productDeployStatus: studioAllowedStatus,
          substreams: [
            "studio",
            "network"
          ],
          environmentStatus: "all"
        }
      ])
    }
  ],
  [
    "injective",
    {
      id: "injective",
      name: "Injective",
      order: 8,
      chains: /* @__PURE__ */ new Set([
        {
          uid: "injective-1",
          network: "injective",
          chainId: 1,
          chainLikenessOrder: 33,
          name: "Injective",
          graphCliName: "injective-mainnet",
          testnet: false,
          aliases: [
            "Injective Mainnet"
          ],
          productDeployStatus: fullyBlockedStatus,
          substreams: [
            "network"
          ],
          environmentStatus: "all"
        },
        {
          uid: "injective-2",
          network: "injective",
          chainId: 888,
          chainLikenessOrder: 33,
          name: "Injective Testnet",
          graphCliName: "injective-testnet",
          testnet: true,
          aliases: [
            "Injective Testnet"
          ],
          productDeployStatus: fullyBlockedStatus,
          substreams: [
            "network"
          ],
          environmentStatus: "all"
        }
      ])
    }
  ],
  [
    "starknet",
    {
      id: "starknet",
      name: "Starknet",
      order: 9,
      chains: /* @__PURE__ */ new Set([
        {
          uid: "starknet-1",
          network: "starknet",
          chainId: 1,
          chainLikenessOrder: 34,
          name: "Starknet",
          graphCliName: "starknet-mainnet",
          testnet: false,
          aliases: [
            "Starknet Mainnet"
          ],
          productDeployStatus: studioAllowedStatus,
          substreams: [
            "studio",
            "network"
          ],
          environmentStatus: "all"
        }
      ])
    }
  ]
]);
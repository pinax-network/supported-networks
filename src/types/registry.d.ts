/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The Graph networks registry
 */
export interface HttpsThegraphComSchemasV1RegistrySchemaJson {
  networks: HttpsThegraphComSchemasV1NetworkSchemaJson[];
}
/**
 * The Graph networks registry entry
 */
export interface HttpsThegraphComSchemasV1NetworkSchemaJson {
  /**
   * Established name of the chain on the Graph network, i.e. mainnet, btc, arweave-mainnet, near-testnet
   */
  name: string;
  /**
   * Display name of the network, i.e. Ethereum Mainnet, Bitcoin Testnet
   */
  displayName: string;
  /**
   * CAIP-2 Chain ID, i.e. eip155:1, bip122:000000000019d6689c085ae165831e93
   */
  caip2ChainId: string;
  /**
   * [optional] List of possible aliases for the chain, i.e. ethereum, eth, mainnet, eth-mainnet
   */
  aliases?: string[];
  /**
   * [optional] Name of the related L1 chain, i.e. mainnet
   */
  childOf?: string;
  /**
   * Firehose block information
   */
  firehoseBlock?: {
    /**
     * Block type, i.e. sf.ethereum.type.v2.Block
     */
    type: string;
    /**
     * Bytes encoding, i.e. hex, 0xhex, base58
     */
    bytesEncoding: "hex" | "0xhex" | "base58";
    /**
     * Protobuf definitions on buf.build, i.e. https://buf.build/streamingfast/firehose-ethereum
     */
    bufBuildUrl: string;
    /**
     * [optional] Block model if EVM chain, i.e. base or extended
     */
    evmModel?: "base" | "extended";
  };
  genesisBlock?: {
    /**
     * Hash of the genesis block
     */
    hash: string;
    /**
     * Block height of the genesis block
     */
    height: number;
  };
  /**
   * Symbol of the native token
   */
  nativeToken: string;
  /**
   * [optional] Protocol name in graph-node, i.e. ethereum, near, arweave
   */
  graphNodeProtocol?: "ethereum" | "near" | "arweave" | "cosmos" | "starknet";
  /**
   * URLs for the block explorers
   */
  blockExplorerUrls: string[];
  /**
   * Whether the chain is a testnet
   */
  isTestnet: boolean;
  /**
   * Chain support in Edge&Node Studio
   */
  studioSupport: (
    | "subgraph-rpc"
    | "subgraph-firehose"
    | "subgraph-substreams"
  )[];
  /**
   * Issuance rewards on the Graph Network for this chain
   */
  issuanceRewards: boolean;
  web3Icon?: string;
  /**
   * List of public RPC URLs for the chain
   */
  publicRpcUrls: string[];
  /**
   * List of public API URLs for the chain, i.e. https://api.etherscan.io/api
   */
  publicApiUrls: string[];
  /**
   * URL to the chain documentation
   */
  docsUrl?: string;
}

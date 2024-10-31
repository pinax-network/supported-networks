import { HttpsThegraphComSchemasV1NetworkSchemaJson as NetworkSchema } from "./types/registry";
import { loadNetworks } from "./utils/networks";
import { fetchWeb3NetworkIcons } from "./utils/web3icons";
import { getActiveNetworks } from "./utils/graphnetwork";

const NETWORKS: NetworkSchema[] = [];
const ERRORS: string[] = [];

function validateUniqueness() {
  process.stdout.write("Validating uniqueness ... ");
  for (const field of [
    "id",
    "displayName",
    "caip2Id",
    "aliases",
    "genesis.hash",
  ]) {
    const values = NETWORKS.flatMap((n) => {
      if (Array.isArray(n[field])) return n[field];
      if (field.includes(".")) {
        const [obj, fi] = field.split(".");
        return n[obj]?.[fi] ? [n[obj][fi]] : [];
      }
      return n[field] ? [n[field]] : [];
    });
    const uniqueValues = new Set(values);
    if (uniqueValues.size !== values.length) {
      const value = values.find(
        (item, index) => values.indexOf(item) !== index,
      );
      ERRORS.push(`Duplicate field: "${field} = ${value}"`);
    }
  }
  process.stdout.write("done\n");
}

function validateRelations() {
  process.stdout.write("Validating relations ... ");
  for (const network of NETWORKS) {
    if (network.relations) {
      for (const relation of network.relations) {
        if (!NETWORKS.find((n) => n.id === relation.network)) {
          ERRORS.push(
            `Network ${network.id} has unknown related network: ${relation.network}`,
          );
        }
      }
    }
  }

  process.stdout.write("done\n");
}

function validateTestnets() {
  process.stdout.write("Validating testnets ... ");
  for (const network of NETWORKS) {
    if (["testnet", "devnet"].includes(network.networkType)) {
      const mainnetId = network.relations?.find((n) => n.kind === "testnetOf");
      if (!mainnetId) {
        ERRORS.push(`Testnet ${network.id} has no mainnet relation`);
        continue;
      }
      const mainnet = NETWORKS.find((n) => n.id === mainnetId.network);
      if (!mainnet) {
        ERRORS.push(`Testnet ${network.id} has unknown mainnet: ${mainnetId}`);
        continue;
      }
      if (
        JSON.stringify(mainnet.firehose) !== JSON.stringify(network.firehose)
      ) {
        ERRORS.push(
          `Testnet ${network.id} has different firehose block type than mainnet ${mainnet.id}`,
        );
      }
    }
    if (network.networkType === "mainnet") {
      if (network.relations?.find((n) => n.kind === "testnetOf")) {
        ERRORS.push(
          `Mainnet network ${network.id} can't have testnetOf relation`,
        );
      }
    }
  }

  process.stdout.write("done\n");
}

function validateUrls() {
  process.stdout.write("Validating URLs ... ");
  const urls = [
    ...new Set(
      NETWORKS.flatMap((n) => [
        n.rpcUrls ?? [],
        n.explorerUrls ?? [],
        (n.apiUrls ?? []).map((u) => u.url),
      ]).flat(),
    ),
  ];
  for (const url of urls) {
    const match = /\{([^}]+)\}/g.exec(url); // Matches any {..}
    if (match && !/^[A-Z_]+$/.test(match[1])) {
      ERRORS.push(`Only upper-case variables allowed in URL: ${url}`);
    }
  }
  process.stdout.write("done\n");
}

async function validateWeb3Icons() {
  process.stdout.write("Validating web3 icons ... ");
  const icons = await fetchWeb3NetworkIcons();
  for (const network of NETWORKS) {
    if (network.web3Icon) {
      if (!icons.find((i) => i.id === network.web3Icon)) {
        ERRORS.push(
          `Network ${network.id} web3icon id does not exist: ${network.web3Icon}`,
        );
      }
    } else {
      if (icons.find((i) => i.id === network.id)) {
        ERRORS.push(
          `Network ${network.id} does not have a web3icon but there exists an icon with the same id. Consider adding it.`,
        );
      }
    }
  }
  process.stdout.write("done\n");
}

async function validateFirehoseBlockType() {
  process.stdout.write("Validating firehose block type ... ");
  const bufUrls = [
    ...new Set(
      NETWORKS.filter((n) => n.firehose?.bufUrl).map((n) => n.firehose!.bufUrl),
    ),
  ];
  await Promise.all(
    bufUrls.map(async (url) => {
      if (!url.startsWith("https://buf.build/")) {
        ERRORS.push(`Firehose block type buf.build URL is invalid: ${url}`);
        return;
      }
      const [owner, name] = url.split("/").slice(-2);
      try {
        const res = await fetch(
          "https://buf.build/buf.alpha.registry.v1alpha1.ResourceService/GetResourceByName",
          {
            headers: { "content-type": "application/json" },
            body: `{"owner":"${owner}","name":"${name}"}`,
            method: "POST",
          },
        );
        if (res.status !== 200) {
          ERRORS.push(
            `Firehose block type buf.build URL doesn't exist: ${url}`,
          );
        }
      } catch (e) {
        ERRORS.push(`Can't fetch: ${url} from buf.build`);
      }
    }),
  );
  process.stdout.write("done\n");
}

async function validateGraphNetworks() {
  process.stdout.write("Validating graph networks ... ");
  const activeGraphNetworks = await getActiveNetworks();
  const activeRegistryNetworks = NETWORKS.filter((n) => n.issuanceRewards);
  for (const network of activeRegistryNetworks) {
    const graphNetwork = activeGraphNetworks.find(
      (n) => n.alias === network.id,
    );
    if (!graphNetwork) {
      ERRORS.push(
        `Network ${network.id} is active in registry but not on the graph network`,
      );
      continue;
    }
    if (graphNetwork.id !== network.caip2Id) {
      ERRORS.push(
        `Network ${network.id} has non-matching chain id on the graph network: ${graphNetwork?.id} vs ${network.caip2Id}`,
      );
    }
  }
  if (activeGraphNetworks.length !== activeRegistryNetworks.length) {
    // TODO: uncomment when all networks are added to the registry
    // ERRORS.push(
    //   `Active networks count mismatch: graph=${activeGraphNetworks.length} registry=${activeRegistryNetworks.length}`,
    // );
  }
  process.stdout.write("done\n");
}

async function main() {
  const [, , networksPath = "registry/networks"] = process.argv;

  NETWORKS.push(...loadNetworks(networksPath));
  process.stdout.write(`Loaded ${NETWORKS.length} networks\n`);

  if (NETWORKS.length === 0) {
    ERRORS.push("No networks found");
  }

  validateUniqueness();
  validateRelations();
  validateTestnets();
  validateUrls();
  await validateWeb3Icons();
  await validateFirehoseBlockType();
  await validateGraphNetworks();

  if (ERRORS.length > 0) {
    process.stderr.write("Validation errors:\n");
    for (const error of ERRORS) {
      process.stderr.write(`  - ${error}\n`);
    }
    process.exit(1);
  }

  process.stdout.write("All networks are valid\n");
}

await main();

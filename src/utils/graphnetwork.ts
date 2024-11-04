const THEGRAPH_STUDIO_KEY = process.env.THEGRAPH_STUDIO_KEY!;

interface GraphResponse {
  data: {
    networks: {
      id: string;
      alias: string;
    }[];
  };
}

export async function getActiveNetworks() {
  if (!THEGRAPH_STUDIO_KEY) {
    throw new Error("THEGRAPH_STUDIO_KEY is not set");
  }
  // EBO subgraph
  const response = await fetch(
    `https://gateway.thegraph.com/api/${THEGRAPH_STUDIO_KEY}/subgraphs/id/4KFYqUWRTZQ9gn7GPHC6YQ2q15chJfVrX43ezYcwkgxB`,
    {
      body: '{"query":"{\\n  networks(where: { removedAt: null }) {\\n    id\\n \\n    alias\\n  }\\n}\\n"}',
      method: "POST",
    },
  );

  const json = (await response.json()) as GraphResponse;
  if (!json.data) {
    throw new Error("Invalid response from the graph gateway");
  }
  return json.data.networks;
}

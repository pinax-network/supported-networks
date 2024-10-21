namespace TheGraph.Blocks;

model Block {
  // Block ID
  id: string;

  // Protobuf block type
  type: string;

  // Protobuf buf.build URL
  url: string;
}

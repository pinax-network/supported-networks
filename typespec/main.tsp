import "@typespec/json-schema";

import "./blocks.tsp";
import "./networks.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
namespace TheGraph;

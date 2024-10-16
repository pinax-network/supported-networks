import "@typespec/json-schema";

import "./blocks.tsp";
import "./networks.tsp";
import "./providers.tsp";
import "./services.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
namespace TheGraph;
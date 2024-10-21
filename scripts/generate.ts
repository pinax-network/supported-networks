import fs from "fs";
import path from "path";
import { HttpsThegraphComNetworkSchemaJson as NetworkSchema} from './types/network';
import { loadNetworks } from "./utils/networks";


function main() {

    loadNetworks('registry/networks');


}

main();
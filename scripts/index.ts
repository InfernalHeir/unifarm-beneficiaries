// This script help us to write json modules
import { toWei } from "web3-utils";
import Stakers from "../beneficiary-whitelist/unifarm-staker.json";

import fs from "fs";
import { UNIFARM_STAKERS } from "../constant";

async function main() {
   // read the json and map it.
   const json = Stakers.map((item) => {
      return {
         beneficiaryAddress: item.userAddress,
         vesting: UNIFARM_STAKERS,
         category: "EARLY ADOPTERS",
         claimTokens: toWei("500"),
         createdAt: new Date(),
         updatedAt: new Date(),
      };
   });

   const jsonContent = JSON.stringify(json);
   // now write a json file
   fs.writeFileSync("./json/Unifarm_Stakers.json", jsonContent);
}

main().then(() => {
   process.exit(0);
});

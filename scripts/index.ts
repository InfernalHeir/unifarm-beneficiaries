// This script help us to write json modules
import { toWei } from "web3-utils";
import ORO_1000 from "../beneficiary-whitelist/oro-1000airdrop.json";
import ORO_5000 from "../beneficiary-whitelist/oro-5000airdrop.json";
import Stakers from "../beneficiary-whitelist/unifarm-staker.json";

import fs from "fs";
import { ORO_EARLY_ONE_THOUSAND, ORO_EARLY_FIVE_THOUSAND, UNIFARM_STAKERS } from "../constant";

async function main() {
   // read the json and map it.
   const json = Stakers.map((item) => {
      return {
         beneficiaryAddress: item.userAddress,
         vesting: UNIFARM_STAKERS,
         category: "UNIFARM_STAKERS",
         claimTokens: toWei("1000"),
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

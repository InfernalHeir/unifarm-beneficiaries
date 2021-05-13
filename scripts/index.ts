// This script help us to write json modules
import { toWei } from "web3-utils";
import BeneficiaryList from "../beneficiary.json";
import fs from "fs";
import { VEST_ADDRESS } from "../constant";

async function main() {
   // read the json and map it.
   const json = BeneficiaryList.map((item) => {
      return {
         beneficiaryAddress: item.userWalletAddress,
         vestAddress: VEST_ADDRESS,
         claimTokens: toWei(String(item.claimToken)),
         jobStatus: 0,
         createdAt: new Date(),
         updatedAt: new Date(),
      };
   });

   const jsonContent = JSON.stringify(json);
   // now write a json file
   fs.writeFileSync("./json/beneficiary.json", jsonContent);
}

main().then(() => {
   process.exit(0);
});

// This script help us to write json modules
import { toWei } from "web3-utils"
import BeneficiaryList from "../beneficiary.json"
import fs from "fs"

async function main() {
   // read the json and map it.
   const jsonModule = BeneficiaryList.map((item) => {
      return {
         beneficiaryAddress: item.userWalletAddress,
         vestAddress: "0x0000000000000000000000000000000000000000",
         claimTokens: toWei(String(item.claimToken)),
      }
   })

   const jsonContent = JSON.stringify(jsonModule)
   // now write a json file
   fs.writeFile("./json/holders.json", jsonContent, "utf8", (err) => {
      if (err) throw err.message
      console.log("write file..")
   })
}

main().then(() => {
   process.exit(0)
})

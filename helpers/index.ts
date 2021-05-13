import { isAddress } from "@ethersproject/address";
import BenificiaryList from "../beneficiary.json";
import Fuse from "fuse.js";
import _ from "lodash";

const beneficiary = new Fuse(BenificiaryList, {
   keys: ["userWalletAddress"],
});

export const vaildateAddress = (account: string): string | boolean => {
   try {
      return isAddress(account);
   } catch (err) {
      return false;
   }
};

export const getBeneficiaryDetails = (account: string) => {
   const isBeneficiary = beneficiary.search(account);
   if (!isBeneficiary || _.isEmpty(isBeneficiary)) return null;
   return isBeneficiary[0].item;
};

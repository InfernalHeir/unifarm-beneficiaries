import { check, query } from "express-validator";
import { vaildateAddress } from "./helpers";
import { logger } from "./logger";

export const addressValidtion = (req, res, next) => {
   const msgSender = req.query["msgSender"];

   if (!vaildateAddress(msgSender)) {
      logger.error("INVALID_ADDR:: invalid ethereum address.");
      return res.status(400).json({
         code: 400,
         message: "INVALID_ADDR:: invalid ethereum address.",
      });
   }

   next();
};

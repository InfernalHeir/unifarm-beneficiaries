import express, { Application, Request, Response } from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import { config } from "dotenv";
import helmet from "helmet";
import cors from "cors";

import _ from "lodash";
import { logger } from "./logger";
import { addressValidtion } from "./vaildation";

import models from "./models";

const BeneficiaryModel = models.Unifarm_Beneficiaries;
// set the config from env
config({ path: `.env.${process.env.NODE_ENV}` });

const app: Application = express();

const HOSTNAME: string = String(process.env.HOSTNAME);
const PORT: number = Number(process.env.PORT);

// enable cors
app.use(cors());
// body parser
app.use(json());
app.use(urlencoded({ extended: true }));
// setup morgan
app.use(morgan("combined"));
// setup helmet
app.use(helmet());
// get details

app.get(
   "/beneficiaries",
   addressValidtion,
   async (req: Request, res: Response) => {
      try {
         const beneficiaryAddress = req.query.msgSender as string;
         // check beneficiary on pg server
         const beneficiary = await BeneficiaryModel.findAll({
            raw: true,
            where: {
               beneficiaryAddress: beneficiaryAddress,
            },
         });

         if (_.isEmpty(beneficiary)) {
            logger.error(
               `BENEFICIARY_EMPTY: No Beneficiary Found for ${beneficiaryAddress}`
            );
            return res.status(400).json({
               code: 400,
               data: [],
            });
         }

         const data = beneficiary.map((values: any) => {
            return {
               beneficiaryAddress: values.beneficiaryAddress,
               vestAddress: values.vestAddress,
               claimTokens: values.claimTokens,
            };
         });

         return res.status(200).json({
            code: 200,
            data,
         });
      } catch (error) {
         logger.error(`ROUTE_EXECEPTION: reason ${error.message}`);
         return res.status(400).json({
            code: 400,
            data: [],
         });
      }
   }
);

app.use(function (req, res, next) {
   logger.error(`BAD_REQUEST: one bad request found from ${req.ip}`);
   res.status(400).json({
      code: 400,
      message: "BAD_REQUEST:: no route found.",
   });
});

app.listen(PORT, HOSTNAME, () => {
   console.log(`server started at ${PORT} port`);
});

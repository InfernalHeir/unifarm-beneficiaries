import express, { Application, Request, Response } from "express"
import { json, urlencoded } from "body-parser"
import morgan from "morgan"
import { getBeneficiaryDetails, vaildateAddress } from "./helpers"
import { NO_BENEFICIARY_FOUND, NO_ETHEREUM_ADDRESS } from "./error"
import { config } from "dotenv"
import helmet from "helmet"

// set the config from env
config()

const app: Application = express()

const HOSTNAME: string = String(process.env.HOSTNAME)
const PORT: number = Number(process.env.PORT)

// body parser
app.use(json())
app.use(urlencoded({ extended: true }))
// setup morgan
app.use(morgan("combined"))
// setup helmet
app.use(helmet())
// get details
app.get("/beneficiaries", (req: Request, res: Response) => {
   const beneficiaryAddress = req.query.msgSender as string
   if (!beneficiaryAddress || !vaildateAddress(beneficiaryAddress)) {
      return res.status(400).json({
         status: false,
         errCode: 400,
         data: {},
         message: NO_ETHEREUM_ADDRESS,
      })
   }

   const isHolder = getBeneficiaryDetails(beneficiaryAddress)
   if (!isHolder) {
      return res.status(400).json({
         status: false,
         errCode: 400,
         data: {
            isBenificiary: false,
            holderDetails: [],
         },
         message: NO_BENEFICIARY_FOUND,
      })
   }

   return res.json({
      status: true,
      data: {
         isBenificiary: true,
         holderDetails: isHolder,
      },
   })
})

app.listen(PORT, HOSTNAME, () => {
   console.log(`server started at ${PORT} port`)
})

"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _helpers = require("./helpers");

var _error = require("./error");

var _dotenv = require("dotenv");

var _helmet = _interopRequireDefault(require("helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// set the config from env
(0, _dotenv.config)();
var app = (0, _express["default"])();
var HOSTNAME = String(process.env.HOSTNAME);
var PORT = Number(process.env.PORT); // body parser

app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
})); // setup morgan

app.use((0, _morgan["default"])("combined")); // setup helmet

app.use((0, _helmet["default"])()); // get details

app.get("/beneficiaries", function (req, res) {
  var beneficiaryAddress = req.query.msgSender;

  if (!beneficiaryAddress || !(0, _helpers.vaildateAddress)(beneficiaryAddress)) {
    return res.status(400).json({
      status: false,
      errCode: 400,
      data: {},
      message: _error.NO_ETHEREUM_ADDRESS
    });
  }

  var isHolder = (0, _helpers.getBeneficiaryDetails)(beneficiaryAddress);

  if (!isHolder) {
    return res.status(400).json({
      status: false,
      errCode: 400,
      data: {
        isBenificiary: false,
        holderDetails: []
      },
      message: _error.NO_BENEFICIARY_FOUND
    });
  }

  return res.json({
    status: true,
    data: {
      isBenificiary: true,
      holderDetails: isHolder
    }
  });
});
app.listen(PORT, function () {
  console.log("server started at ".concat(PORT, " port"));
});
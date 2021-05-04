"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBeneficiaryDetails = exports.vaildateAddress = void 0;

var _address = require("@ethersproject/address");

var _fuse = _interopRequireDefault(require("fuse.js"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BenificiaryList = [{
  userWalletAddress: "0x828954676f2634D404251f05e4F619FF83f7EceB",
  claimToken: 1000
}, {
  userWalletAddress: "0xF6C172dd45ABd82E1F067801B309A7fFC4977971",
  claimToken: 500
}];
var beneficiary = new _fuse["default"](BenificiaryList, {
  keys: ["userWalletAddress"]
});

var vaildateAddress = function vaildateAddress(account) {
  try {
    return (0, _address.isAddress)(account);
  } catch (err) {
    return false;
  }
};

exports.vaildateAddress = vaildateAddress;

var getBeneficiaryDetails = function getBeneficiaryDetails(account) {
  var isBeneficiary = beneficiary.search(account);
  if (!isBeneficiary || _lodash["default"].isEmpty(isBeneficiary)) return null;
  return isBeneficiary[0].item;
};

exports.getBeneficiaryDetails = getBeneficiaryDetails;
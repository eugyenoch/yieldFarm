const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(callback) {
  let tokenFarm = await TokenFarm.deployed();
  let totalValue = await tokenFarm.getUserTotalValue(
    "0xe93a027074c23f50253a9fe4bb3608902b3f5ccb"
    //"0x9ea8d6272b724afb813a9e7c4eaf07c7af4fe996"
    //"0x643315C9Be056cDEA171F4e7b2222a4ddaB9F88D"
  );

  console.log(totalValue.toString());
  callback();
};

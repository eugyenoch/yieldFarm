const DappToken = artifacts.require("DappToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(deployer, network, accounts) {
  // Deploy TokenFarm
  const dappToken = await DappToken.deployed();
  await deployer.deploy(TokenFarm, dappToken.address);
  const tokenFarm = await TokenFarm.deployed();
  await dappToken.transfer(tokenFarm.address, "10000000000000000000000");

  if (network.startsWith("kovan") || network.startsWith("live") || network.startsWith("Binance") || network.startsWith("Ethereum") || network.startsWith("BSC") || network.startsWith("testnet") || network.startsWith("Testnet")) {
    // LINK Token address
    await tokenFarm.addAllowedTokens(
      "0x9EA8d6272B724AfB813A9E7C4eaF07C7aF4FE996"
    );
    await tokenFarm.setPriceFeedContract(
      "0x9EA8d6272B724AfB813A9E7C4eaF07C7aF4FE996",
      "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE"
    );
    // FAU Token address. Pretending FAU is DAI
    await tokenFarm.addAllowedTokens(
      "0xe93a027074c23f50253a9fe4BB3608902B3F5cCB"
    );
    await tokenFarm.setPriceFeedContract(
      "0xe93a027074c23f50253a9fe4BB3608902B3F5cCB",
      "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE"
    );
    // DAPP Token Address - also dai
    await tokenFarm.addAllowedTokens(dappToken.address);
    await tokenFarm.setPriceFeedContract(
      dappToken.address,
      "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE"
    );
  }
};

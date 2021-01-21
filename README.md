# yieldfarm

This repo allows you to stake your token and receive custom token as a reward (and can do yeild farming). It gets the Kovan price feed of the ERC with ETH to calculate value. 

To get started clone this repo.

# Quickstart
Set your `MNEMONIC` and `RPC_URL` 
```
export MNEMONIC="apple, cheese, etc...."
export RPC_URL="https://....."

```
You will need Truffle installed too 
Then run:
```
yarn
truffle migrate --reset --network live
yarn start
```
You can now stake and unstake your mDAI. Once you have some staked, you can issue tokens. 

To issue tokens run
```
truffle exec scripts/issue-tokens.js
```

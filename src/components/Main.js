import React, { Component } from "react";
import dai from "../dai.png";
import chainlink from "../chainlink.png";
import dappImage from "../dapp.png";

class Main extends Component {
  render() {
    return (
      <div id="content" className="mt-3">
        <table className="table table-borderless text-muted text-center">
          <thead>
            <tr>
              <th scope="col">Staking Balance {this.props.tokenName}</th>
              <th scope="col">Reward Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {window.web3.utils.fromWei(this.props.stakingBalance, "BNB")}{" "}
                {this.props.tokenName}
              </td>
              <td>
                {window.web3.utils.fromWei(
                  this.props.dappTokenBalance,
                  "Ether"
                )}{" "}
                DAPP
              </td>
            </tr>
          </tbody>
        </table>

        <div className="card mb-4">
          <div className="card-body">
            <form
              className="mb-3"
              onSubmit={(event) => {
                event.preventDefault();
                let amount;
                amount = this.input.value.toString();
                amount = window.web3.utils.toWei(amount, "BNB");
                this.props.stakeTokens(amount, this.props.tokenAddress);
              }}
            >
              <div>
                <label className="float-left">
                  <b>Stake Tokens</b>
                </label>
                <span className="float-right text-muted">
                  {window.web3.utils.fromWei(this.props.erc20Balance, "BNB")}
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => {
                    this.input = input;
                  }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={this.props.image} height="32" alt="" />
                    &nbsp;&nbsp;&nbsp; {this.props.tokenName}
                  </div>
                </div>
              </div>
              <div className="input-group mb-4">
                <form>
                  <label for="chainlink"> &nbsp; </label>
                  <input
                    type="button"
                    id="chainlink"
                    name="token"
                    value="Vecks Token"
                    onClick={(event) => {
                      event.preventDefault();
                      this.props.changeToken(
                        "0x51d87d1ed4052492b14db4fbd1fa6395c6dcb4ea",
                        "VCKT",
                        Vecks Token
                      );
                      //this.props.updateBalance(this.props.tokenAddress);
                    }}
                  />
                  <label for="fau"> &nbsp;&nbsp;&nbsp;&nbsp;</label>
                  <input
                    type="button"
                    id="fau"
                    name="token"
                    value="Veck"
                    onClick={(event) => {
                      event.preventDefault();
                      this.props.changeToken(
                        "0x8182E758BD18B391C38A23368EBaD7034dE39F59",
                        "VCK",
                        Veck Token
                      );
                      //this.props.updateBalance(this.props.tokenAddress);
                    }}
                  />
                  <label for="dapptoken"> &nbsp;&nbsp;&nbsp; &nbsp;</label>
                  <input
                    type="button"
                    id="dapptoken"
                    name="token"
                    value="dapptoken"
                    onClick={(event) => {
                      event.preventDefault();
                      this.props.changeToken(
                        this.props.dappTokenAddress,
                        "DAPP",
                        dappImage
                      );
                      //this.props.updateBalance(this.props.tokenAddress);
                    }}
                  />
                </form>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                STAKE!
              </button>
            </form>
            <button
              type="submit"
              className="btn btn-link btn-block btn-sm"
              onClick={(event) => {
                event.preventDefault();
                this.props.unstakeTokens(this.props.tokenAddress);
              }}
            >
              UN-STAKE...
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

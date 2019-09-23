import React from "react";
import { newContextComponents } from "drizzle-react-components";
import { DrizzleContext } from "drizzle-react";
import logo from "./logo.svg";

const { AccountData, ContractData, ContractForm } = newContextComponents;

const balanceOf = data => {
  return (<span>
    <b>{data}</b>
  </span>)
};

const totalSupply = data => {
  return (<span>
    <b>{data}</b>
  </span>)
};

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      if (!initialized) {
        return "Loading...";
      }

      const { accounts } = drizzleState;
      return (
        <div className="App">
          <div>
            <img src={logo} alt="drizzle-logo" />
            <h1>DISH Tokens</h1>
            <p>
              Tokenize all the things! Examples of ERC20, ERC721, and ERC777.
            </p>
          </div>

          <div className="section">

            <h2>Your Account</h2>
            <AccountData
              drizzle={drizzle}
              drizzleState={drizzleState}
              accountIndex={0}
              units="ether"
              precision={3}
              render={({ address, balance, units }) => (
                <div>
                  <div>Address: <span style={{ color: "#EC1845" }}>{address}</span></div>
                  <div>Ether: <span style={{ color: "#EC1845" }}>{balance}</span> {units}</div>
                </div>
              )}
            />
          </div>

          <div className="section">
            <h2>DISH Token (ERC20)</h2>
            <p>
              <strong>Total Supply: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="DISHToken"
                method="totalSupply"
                render={totalSupply}
              />{" "}
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="DISHToken"
                method="symbol"
                hideIndicator
              />
            </p>
            <p>
              <strong>My Balance: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="DISHToken"
                method="balanceOf"
                methodArgs={[accounts[0]]}
                render={balanceOf}
              />
            </p>
            <h3>Send Tokens</h3>
            <ContractForm
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="DISHToken"
              method="transfer"
              labels={["To Address", "Amount to Send"]}
            />
          </div>
        </div>
      );
    }}
  </DrizzleContext.Consumer>
);

import * as dotenv from "dotenv";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
dotenv.config();

module.exports = {
  solidity: "0.8.7",
  networks: {
    mumbai: {
      url: process.env.URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

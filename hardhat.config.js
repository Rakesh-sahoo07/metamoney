/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");
const { task } = require('hardhat/config');

dotenv.config();

task("accounts", "Prints the list of accounts", async(taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});
module.exports = {
    solidity: "0.8.9",
    networks: {
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/422b0f2e7dda442ca9ea085826b45222",
            accounts: ["52ce6ada203c3f92d3e6c8ac9fa2827ef72e60288cf2aede523cb4dac7bc01e2"]
        }
    },
    etherscan: {
        apiKey: "YP942M5VBJCYATD9U6VG6J3E6URZUTMDJQ",

    },
};
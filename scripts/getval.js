const { Web3 } = require("web3");

const mumbaiTestnetURL =
  "https://polygon-mumbai.g.alchemy.com/v2/XdNU06ztypclkjqeKrRfaEeK1nkW-snp";
const swisstronikTestnetURL = "https://json-rpc.testnet.swisstronik.com/";

// Replace with your actual contract addresses
const mumbaiContractAddress = "0xb9D7F78504a405cb5A852601f9141762Fea27E92";
const swisstronikContractAddress = "0x114844ba8515E2745CA736663DB562B9F6486E6F";

async function main() {
  try {
    // Create instances of Web3 for both testnets
    const web3Mumbai = new Web3(mumbaiTestnetURL);
    const web3Swisstronik = new Web3(swisstronikTestnetURL);

    // Retrieve value from slot #0
    const slot0ValueMumbai = await web3Mumbai.eth.getStorageAt(
      mumbaiContractAddress,
      0
    );
    const slot0ValueSwisstronik = await web3Swisstronik.eth.getStorageAt(
      swisstronikContractAddress,
      0
    );

    console.log("Mumbai Testnet - Slot #0 Value:", slot0ValueMumbai.toString());
    console.log(
      "Swisstronik Testnet - Slot #0 Value:",
      Web3.toAscii(slot0ValueSwisstronik)
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Properly call the async main function
(async () => {
  await main();
})();

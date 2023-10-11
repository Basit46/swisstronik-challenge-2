const hre = require("hardhat");
const {
  encryptDataField,
  decryptNodeResponse,
} = require("@swisstronik/swisstronik.js");

const sendShieldedQuery = async (provider, destination, data) => {
  const rpclink = hre.network.config.url;
  const [encryptedData, usedEncryptedKey] = await encryptDataField(
    rpclink,
    data
  );
  const response = await provider.call({
    to: destination,
    data: encryptedData,
  });
  return await decryptNodeResponse(rpclink, response, usedEncryptedKey);
};

async function main() {
  const contractAddress = "0xBA2482a59d3f337eaE25562480170C4A63B474e3";
  const [signer] = await hre.ethers.getSigners();
  const contractFactory = await hre.ethers.getContractFactory(
    "VariableContract"
  );
  const contract = contractFactory.attach(contractAddress);
  const functionName = "getSringVariable";
  const responseMessage = await sendShieldedQuery(
    signer.provider,
    contractAddress,
    contract.interface.encodeFunctionData(functionName)
  );
  console.log(
    "Returned variable:",
    contract.interface.decodeFunctionResult(functionName, responseMessage)[0]
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("VariableContract");

  await contract.waitForDeployment();

  console.log(`Deployed to ${contract.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//mumbai: 0x2FcfB9742FF570e4447C79d72606d2600f1706D4
//swiss: 0xBA2482a59d3f337eaE25562480170C4A63B474e3

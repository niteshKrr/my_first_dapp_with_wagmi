import { ethers } from "hardhat";

async function main() {
  

  const MyDapp = await ethers.getContractFactory("MyDapp");
  const myDapp = await MyDapp.deploy();

  console.log("MyDapp address:", myDapp.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

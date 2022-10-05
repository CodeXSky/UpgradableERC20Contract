import { ethers, upgrades } from "hardhat";

async function main() {
  const ERC20UpgradableV2 = await ethers.getContractFactory(
    "ERC20UpgradableV2"
  );
  console.log("Upgrading ERC20UpgradableV1...");
  await upgrades.upgradeProxy(
    "0x2eAC1d212dF99668dCa4864184d2a12eA120d49a",
    ERC20UpgradableV2
  );
  console.log("Upgraded Successfully");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

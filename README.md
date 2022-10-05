# Upgrade ERC20 Project
Access console mumbai
```shell
npx hardhat console --network mumbai
```

# Deploy ERC20UpgradeV1
```shell
npx hardhat run scripts/deploy.ts --network mumbai
```

# Deploy ERC20UpgradeV2
```shell
npx hardhat run scripts/upgrade.ts --network mumbai
```


# Test contract on console mumbai

Get factory from contract
```shell
const Contract = await ethers.getContractFactory('ERC20UpgradableV1');
```

Attach smart contract
```shell
const contract = await Contract.attach('0x2eAC1d212dF99668dCa4864184d2a12eA120d49a');
```
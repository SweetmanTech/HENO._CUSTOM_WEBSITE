import { BigNumber } from "ethers"

const getMulticallFromDrops = (drops, priceValues, mintData) =>
  drops.map((drop, i) => ({
    target: drop.contractAddress,
    allowFailure: false, // Set to true if you want to allow this call to fail without reverting the entire transaction
    value: BigNumber.from(priceValues[i]),
    callData: mintData,
  }))

export default getMulticallFromDrops

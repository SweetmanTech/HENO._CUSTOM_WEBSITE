import { Interface } from "ethers/lib/utils"
import { IS_TESTNET, BASE_MINTER } from "../consts"
import zora721Abi from "../abi/zora721drop.json"

const getMintData = (mintTo) =>
  mintTo &&
  new Interface(zora721Abi).encodeFunctionData("mintWithRewards", [
    mintTo,
    1,
    "heno comments",
    IS_TESTNET ? "" : BASE_MINTER,
  ])

export default getMintData

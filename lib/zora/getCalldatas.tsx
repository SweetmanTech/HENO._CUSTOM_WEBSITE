import { utils } from "ethers"
import abi from "@/lib/abi/zora-drop.json"
import getEncodedMinterArgs from "./getEncodedMinterArgs"

const getCalldatas = (count: number, minter: string, referral: string, to: string) => {
  const iface = new utils.Interface(abi)
  const quantity = 1
  const mintReferral = referral
  const minterArguments = getEncodedMinterArgs(to, "MAGIC")

  return Array.from({ length: count }, (_, index) => {
    const tokenId = index + 1
    return iface.encodeFunctionData("mintWithRewards", [
      minter,
      tokenId,
      quantity,
      minterArguments,
      mintReferral,
    ])
  })
}

export default getCalldatas

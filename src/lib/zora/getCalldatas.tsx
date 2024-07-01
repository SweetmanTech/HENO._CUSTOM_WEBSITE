import { utils } from "ethers"
import { zoraCreator1155ImplABI } from "@zoralabs/protocol-deployments"
import getEncodedMinterArgs from "./getEncodedMinterArgs"

const getCalldatas = (count: number, minter: string, referral: string, to: string) => {
  const iface = new utils.Interface(zoraCreator1155ImplABI)
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

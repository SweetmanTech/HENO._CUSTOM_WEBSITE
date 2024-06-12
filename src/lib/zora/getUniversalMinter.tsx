import { zoraUniversalMinterAddress } from "@zoralabs/universal-minter"

const getUniversalMinter = (chainId) =>
  zoraUniversalMinterAddress[chainId as keyof typeof zoraUniversalMinterAddress]

export default getUniversalMinter

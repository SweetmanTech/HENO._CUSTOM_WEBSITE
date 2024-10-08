import getCollectorClient from './getCollectorClient'
import { Address } from 'viem'

const getToken = async (
  collectionAddress: Address,
  mintType: any,
  tokenId: any,
  chainId: number
) => {
  const collectorClient = getCollectorClient(chainId)

  const tokenInfo: any = {
    tokenContract: collectionAddress,
    mintType,
  }

  if (mintType === '1155') tokenInfo.tokenId = tokenId

  const { token, prepareMint } = await collectorClient.getToken(tokenInfo)

  return {
    token,
    prepareMint,
  }
}

export default getToken

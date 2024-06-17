import getAlchemyBaseUrl from "./getAlchemyBaseUrl"
import { CHAIN_ID } from "../consts"

const getNFTsForContract = async (contractAddress: string, chainId: number = CHAIN_ID) => {
  const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  const response = await fetch(
    `${getAlchemyBaseUrl(
      chainId,
    )}nft/v3/${alchemyKey}/getNFTsForContract?contractAddress=${contractAddress}&withMetadata=true`,
  )

  if (!response.ok) {
    return { error: response }
  }

  const data = await response.json()
  return data
}

export default getNFTsForContract

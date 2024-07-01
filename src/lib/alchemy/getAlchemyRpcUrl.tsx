import { zora, zoraSepolia } from "viem/chains"
import getAlchemyBaseUrl from "./getAlchemyBaseUrl"

const getAlchemyRpcUrl = (chainId: number) => {
  if (chainId === zoraSepolia.id) return "https://sepolia.rpc.zora.energy"
  if (chainId === zora.id) return "https://rpc.zora.energy"

  return `${getAlchemyBaseUrl(chainId)}v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
}

export default getAlchemyRpcUrl

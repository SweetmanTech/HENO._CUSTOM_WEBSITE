import { ethers } from "ethers"
import { zora, zoraTestnet, zoraSepolia } from "viem/chains"
import getAlchemyBaseUrl from "./alchemy/getAlchemyBaseUrl"

const ZORA = "https://rpc.zora.energy/"
const ZORA_TESTNET = "https://testnet.rpc.zora.energy"
const ZORA_SEPOLIA_TESTNET = "https://sepolia.rpc.zora.energy"

const getDefaultProvider = (chainId: number) => {
  const base = getAlchemyBaseUrl(chainId)
  if (chainId === zora.id) {
    return ethers.getDefaultProvider(ZORA)
  }
  if (chainId === zoraTestnet.id) {
    return ethers.getDefaultProvider(ZORA_TESTNET)
  }
  if (chainId === zoraSepolia.id) {
    return ethers.getDefaultProvider(ZORA_SEPOLIA_TESTNET)
  }
  const rpc = `${base}v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
  return ethers.getDefaultProvider(rpc)
}

export default getDefaultProvider

import { mainnet, sepolia, base, baseSepolia, arbitrum, arbitrumSepolia } from "viem/chains"

const ETH = "https://eth-mainnet.g.alchemy.com/"
const SEPOLIA = "https://eth-sepolia.g.alchemy.com/"
const BASE = "https://base-mainnet.g.alchemy.com/"
const BASE_SEPOLIA = "https://base-sepolia.g.alchemy.com/"
const ARBITRUM = "https://arb-mainnet.g.alchemy.com/"
const ARBITRUM_SEPOLIA = "https://arb-sepolia.g.alchemy.com/"

const getAlchemyBaseUrl = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
      return ETH
    case sepolia.id:
      return SEPOLIA
    case base.id:
      return BASE
    case baseSepolia.id:
      return BASE_SEPOLIA
    case arbitrum.id:
      return ARBITRUM
    case arbitrumSepolia.id:
      return ARBITRUM_SEPOLIA
    default:
      return ETH
  }
}

export default getAlchemyBaseUrl

import { createPublicClient, http } from "viem"
import getViemNetwork from "./getViemNetwork"
import getAlchemyRpcUrl from "../alchemy/getAlchemyRpcUrl"

export const getPublicClient = (chainId: number) => {
  const RPC_URL = getAlchemyRpcUrl(chainId)
  const chain = getViemNetwork(chainId)
  const publicClient = createPublicClient({
    chain,
    transport: http(RPC_URL),
  })
  return publicClient
}

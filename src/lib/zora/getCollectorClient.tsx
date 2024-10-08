import { createCollectorClient } from "@zoralabs/protocol-sdk"
import { getPublicClient } from "../clients"

const getCollectorClient = (chainId: number) => {
  const publicClient = getPublicClient(chainId) as any
  const collectorClient = createCollectorClient({
    chainId,
    publicClient,
  })

  return collectorClient
}

export default getCollectorClient

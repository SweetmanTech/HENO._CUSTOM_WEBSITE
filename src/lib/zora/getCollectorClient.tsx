import { getPublicClient } from "../clients"
import { createCollectorClient } from '@zoralabs/protocol-sdk'

const getCollectorClient = (chainId: number) => {
  const publicClient = getPublicClient(chainId)
  const collectorClient = createCollectorClient({
    chainId,
    publicClient,
  })

  return collectorClient
}

export default getCollectorClient

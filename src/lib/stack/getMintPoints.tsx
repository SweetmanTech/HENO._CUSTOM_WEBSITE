import { Address } from "viem"
import getStackClient from "./getStackClient"

const getMintPoints = async (address: Address) => {
  const stackClient = getStackClient()
  const stackPoints = await stackClient.getPoints(address, {
    event: "heno_mints_500",
  })

  return stackPoints
}

export default getMintPoints

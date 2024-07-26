import { Contract } from "ethers"
import abi from "./abi/abi-ERC721Drop.json"
import getDefaultProvider from "./getDefaultProvider"

const get721SaleStatus = async (dropAddress, chainId) => {
  try {
    const drop = new Contract(dropAddress, abi, getDefaultProvider(chainId))
    const details = await drop.saleDetails()

    return {
      publicSaleActive: details.publicSaleActive,
      publicSalePrice: details.publicSalePrice.toString(),
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return null
  }
}

export default get721SaleStatus

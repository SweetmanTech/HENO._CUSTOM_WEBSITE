import useConnectedWallet from "@/hooks/useConnectedWallet"
import { BASE_MINTER, CHAIN_ID, IS_TESTNET, SEPOLIA_MINTER, ZORA_DROP_ADDRESS } from "@/lib/consts"
import { useWeb3Drops } from "@/providers/Web3Provider"
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui"
import { BigNumber } from "ethers"
import { getCalldatas, useUniversalMinter } from "onchain-magic"
import { formatEther } from "viem"

const CrossmintButton = () => {
  const { connectedWallet } = useConnectedWallet()
  const { drops, priceValues } = useWeb3Drops()
  const { universalMinter } = useUniversalMinter(CHAIN_ID)
  const totalValue = priceValues.reduce(
    (total: any, value: any) => total.add(BigNumber.from(value || "0")),
    BigNumber.from(0),
  )
  const targets = Array(drops.length).fill(ZORA_DROP_ADDRESS)
  const calldatas = getCalldatas(
    drops.length,
    IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
    connectedWallet,
    connectedWallet,
  )
  console.log("SWEETS valueInEth", totalValue)
  console.log("SWEETS valueInEth", universalMinter)
  console.log("SWEETS valueInEth", targets)
  console.log("SWEETS valueInEth", calldatas)
  console.log("SWEETS valueInEth", priceValues)
  return (
    <CrossmintPayButton
      collectionId="6ba98c63-365d-43ef-8915-9e097c31c3d2"
      projectId="425871f2-9b99-45d6-9c9c-8b1825f28bcd"
      mintConfig={{
        totalPrice: formatEther(totalValue),
        _universalMinter: universalMinter,
        _target: ZORA_DROP_ADDRESS,
        _value: priceValues[0],
        _tokenCount: drops.length,
        _referral: process.env.NEXT_PUBLIC_MINT_REFERRAL,
        _minter: IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
      }}
      mintTo={connectedWallet}
      checkoutProps={{ paymentMethods: ["fiat"] }}
      environment="staging"
    />
  )
}

export default CrossmintButton

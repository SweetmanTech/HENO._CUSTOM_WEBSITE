import useConnectedWallet from "@/hooks/useConnectedWallet"
import { BASE_MINTER, CHAIN_ID, IS_TESTNET, SEPOLIA_MINTER, ZORA_DROP_ADDRESS } from "@/lib/consts"
import getUniversalMinter from "@/lib/zora/getUniversalMinter"
import { useUserProvider } from "@/providers/UserProvider"
import { useWeb3Drops } from "@/providers/Web3Provider"
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui"

const CrossmintButton = () => {
  const { connectedWallet } = useConnectedWallet()
  const { privyEmail } = useUserProvider()
  const { priceValues } = useWeb3Drops()
  const universalMinter = getUniversalMinter(CHAIN_ID)

  return (
    <CrossmintPayButton
      collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}
      projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID}
      mintConfig={{
        totalPrice: "0.012432",
        _universalMinter: universalMinter,
        _target: ZORA_DROP_ADDRESS,
        _value: priceValues[0],
        _tokenCount: 8,
        _referral: process.env.NEXT_PUBLIC_MINT_REFERRAL,
        _minter: IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
      }}
      className="xmint-btn"
      emailTo={privyEmail}
      loginEmail={privyEmail}
      mintTo={connectedWallet}
      checkoutProps={{
        paymentMethods: ["fiat"],
      }}
      getButtonText={(connecting) => (connecting ? "Connecting" : `Pay with Credit Card`)}
      environment={IS_TESTNET ? "staging" : "production"}
    />
  )
}

export default CrossmintButton

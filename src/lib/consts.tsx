import { sepolia, base } from "viem/chains"

export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET === "true"
export const CHAIN = process.env.NEXT_PUBLIC_TESTNET ? sepolia : base
export const CHAIN_ID = CHAIN.id
export const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
export const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
export const ZORA_DROP_ADDRESS = IS_TESTNET
  ? "0x7a9d13f9427220fd876af288e9359f8fc411febb"
  : "0x4b130ef4051a35883e3b399b67d13b9bd4224798"
export const SPOTIFY_STATE_KEY = "spotify_auth_state"
export const RELIEF_TRACK_ID = "5aDNHHNXc16VktqV1gSq23"
export const HENO_ARTIST_ID = "3mr6jeVpPIXBp8IMMb60aD"
export const TITLE = ""
export const ARTIST = "HENO."
export const BASE_MINTER = "0xFF8B0f870ff56870Dc5aBd6cB3E6E89c8ba2e062"
export const SEPOLIA_MINTER = "0x1Cd1C1f3b8B779B50Db23155F2Cb244FCcA06B21"
export const ARBITRUM_MINTER = "0x1Cd1C1f3b8B779B50Db23155F2Cb244FCcA06B21"
export const HENO_EMAIL = "enjoy@onchainmagic.xyz"
export const GAS_LIMIT_PER_DROP = "175000"
export const MULTICALL_3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const ZORA_FEE = "777000000000000"
export const ONE_MILLISECOND = 1000
export const ARBITRUM_DROP_ADDRESS = IS_TESTNET
  ? "0x6cDBbABD9bcE10F57B745be6a768891AC3CF925b"
  : "0x35b6ce5e1073bbadf33cbcdae9a6b247e0cbf3db"

export const ONE_MILLISEOND = 1000

export const SYSTEM_COMMERCIAL =
  "ipfs://Qmccf1fZeNZc9nWwvq3a5aiQr3bCr5VNCi3PaUbhrUnpRJ/SYSTEM%20COMMERCIAL.mp4"

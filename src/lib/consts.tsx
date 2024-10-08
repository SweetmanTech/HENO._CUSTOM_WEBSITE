import {
  sepolia,
  base,
  zora,
  arbitrumSepolia,
  arbitrum,
  mainnet,
  zoraSepolia,
  baseSepolia,
} from "viem/chains"

export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET === "true"
export const CHAIN = process.env.NEXT_PUBLIC_TESTNET ? sepolia : base
export const CHAIN_ID = CHAIN.id
export const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
export const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
export const ZORA_DROP_ADDRESS = IS_TESTNET
  ? "0x7a9d13f9427220fd876af288e9359f8fc411febb"
  : "0x4b130ef4051a35883e3b399b67d13b9bd4224798"
export const NEYBORS_DROP_ADDRESS = IS_TESTNET
  ? "0x9b1E3507e9D52319314E4303d8F4Df0157839b9b"
  : "0x250fd27b0b6f2438414a98fc9bfa5641b3717f03"
export const ARCADE_DROP_ADDRESS = IS_TESTNET
  ? "0xd09bc336125af900899a741e8d72073e47c376b4"
  : "0x71fc87edd0a98a847c9bb838bc05577ef907f299"
export const SYSTEM_PREVIEW = IS_TESTNET
  ? "0x55A3c55c769637e9166968d9696ED9db7AF2B5a7"
  : "0xd89f4379c2bb81405bbc3484abcd52f402bb393e"
export const HYPERSURVEILLED_ART = IS_TESTNET
  ? "0xb84F5aF0c70EfEb93f8f5DA3C6Ead4EF46805013"
  : "0x21eedbba84befdd4db256ebf6b3db5fc76b49d72"
export const SXSW_BTS = IS_TESTNET
  ? "0x6a080D831CDEe15263CC6Db32E0F888d9ec11392"
  : "0x0837ced4a124a0f766c2974bc0bdeb4232abb9a1"
export const HYDROPLANING_DROP_ADDRESS = IS_TESTNET
  ? "0x9700ea060d43ff3c7ed14b859ea6108a7ef7c2f7"
  : "0x5c0fd2ceb2fb1799116514d29b9956097eaa8c87"
export const HYDROPLANING_REWARDS_RECIPIENT = IS_TESTNET
  ? "0x52d91e960e52641ee7142e2942378dda357b8685"
  : "0x61edd3496d5FF1b84F36be0922a9197f8AAC486e"
export const BONSAI_DROP_ADDRESS = IS_TESTNET
  ? "0x93eea2A99C0A409Dce3478D8431B8e028809b23a"
  : "0x98e929350d82Db54c0Bdb9656F4d2F65ad4ED39f"
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
export const BONASI = "ipfs://QmeiQuQSv8HWsAmZxzX666V26KbknVi82qQMq5sibGhSHr"
export const COLLECTIONS = [
  {
    collectionAddress: ZORA_DROP_ADDRESS,
    chain: IS_TESTNET ? sepolia : base,
    type: "ERC1155",
  },
  {
    collectionAddress: SYSTEM_PREVIEW,
    chain: IS_TESTNET ? sepolia : base,
    type: "ERC1155",
  },
  {
    collectionAddress: HYPERSURVEILLED_ART,
    chain: IS_TESTNET ? sepolia : zora,
    type: "ERC1155",
  },
  {
    collectionAddress: SXSW_BTS,
    chain: IS_TESTNET ? sepolia : zora,
    type: "ERC1155",
  },
  {
    collectionAddress: ARBITRUM_DROP_ADDRESS,
    chain: IS_TESTNET ? arbitrumSepolia : arbitrum,
    type: "ERC1155",
  },
  {
    collectionAddress: NEYBORS_DROP_ADDRESS,
    chain: IS_TESTNET ? sepolia : mainnet,
    type: "ERC721",
  },
  {
    collectionAddress: ARCADE_DROP_ADDRESS,
    chain: IS_TESTNET ? zoraSepolia : zora,
    type: "ERC721",
  },
  {
    collectionAddress: HYDROPLANING_DROP_ADDRESS,
    chain: IS_TESTNET ? baseSepolia : base,
    type: "ERC1155",
  },
]

export const zoraUniversalMinterAddress = {
  1: "0x308E190d70c7d1C6Ed569554bCe73Dc3F4ad359A",
  5: "0x1Eb7Bf3a08784D7cB08CC2AE1448012C0c02bDa2",
  10: "0x97eb05B8db496B12244BCcf17CF377d00a99b67a",
  420: "0x39C51a7957651ea176733F19125BD9c253894D6F",
  424: "0xF82286760a953D2Bad7D6F2F0da458Ac20f955D3",
  999: "0xD9bC36841C259f07924e73cF08d5a2c92d53639B",
  8453: "0x308E190d70c7d1C6Ed569554bCe73Dc3F4ad359A",
  42161: "0xC6899816663891D7493939d74d83cb7f2BBcBB16",
  58008: "0xE9BaDfb9a1658cDF67D8c4631a7f22610C013319",
  81457: "0xC6899816663891D7493939d74d83cb7f2BBcBB16",
  84531: "0x418B87c2C9579d27FC3D66605545AB9889737E60",
  421614: "0x308E190d70c7d1C6Ed569554bCe73Dc3F4ad359A",
  7777777: "0xF482C51346f3c77673dc619F243Eb8B09E9A954E",
  11155111: "0x0ef82DaB14798E63F1B99479Ba689e3f6A6fEb6C",
  168587773: "0xa718BD919eeA529ac75EEf2cf33363AF211f09f4",
  999999999: "0xD662FB0fB00261C039441EF49Dbab154d7c533bD",
}

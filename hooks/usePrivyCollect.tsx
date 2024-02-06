import usePreparePrivyWallet from "./usePreparePrivyWallet"

const usePrivyCollect = () => {
  const { prepare } = usePreparePrivyWallet()

  const onClick = async () => {
    if (!prepare()) return
  }

  return {
    onClick,
  }
}

export default usePrivyCollect

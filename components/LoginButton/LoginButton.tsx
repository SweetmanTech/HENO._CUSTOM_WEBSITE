import { usePrivy } from "@privy-io/react-auth"

const LoginButton = ({ className = "" }) => {
  const { login } = usePrivy()

  return (
    <button
      type="button"
      onTouchStart={login}
      onClick={login}
      className={`${className} bg-darkgray py-[3px]`}
    >
      Collect All
    </button>
  )
}

export default LoginButton

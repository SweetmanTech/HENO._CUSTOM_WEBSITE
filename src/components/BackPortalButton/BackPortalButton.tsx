import { useRouter } from "next/navigation"

const BackPortalButton = () => {
  const { push } = useRouter()

  return (
    <button
      type="button"
      className="uppercase text-[14px] md:text-[18px] text-white border border-white absolute md:left-6 top-10 px-3 py-1"
      onClick={() => push("/employee")}
    >
      Back to employee portal
    </button>
  )
}

export default BackPortalButton

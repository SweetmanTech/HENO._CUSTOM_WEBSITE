import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
  const { pathname } = useRouter()

  const navClasses = `md:min-w-[80px] md:px-[10px] md:h-[40px] 
  text-[12px] samsungS8:text-[14px] md:text-[16px] py-[5px] h-full
  md:border-none bg-[#8c8c8c]
  flex items-center justify-center text-[#d2d2d2] font-dresden cursor-pointer`

  const isHomePage = pathname === "/"
  const isAboutPage = pathname.includes("/about")
  const isMusicPage = pathname.includes("/music")
  const isMintPage = pathname.includes("/mint")

  return (
    <div className="w-full grid grid-cols-5 md:flex gap-x-[10px]">
      <Link href="/">
        <div
          className={`${navClasses}
        ${isHomePage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={`${navClasses}
        ${isAboutPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          About
        </div>
      </Link>
      <Link href="/music">
        <div
          className={`${navClasses}
        ${isMusicPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          Music
        </div>
      </Link>
      <Link href="/mint">
        <div
          className={`${navClasses}
        ${isMintPage ? "border-b-[2px] border-b-[#347fdb] md:!bg-[#347fdb]" : ""}`}
        >
          Mint
        </div>
      </Link>
      <a href="https://play.mynameisheno.com" target="_blank" rel="noreferrer">
        <div className={navClasses}>Play</div>
      </a>
    </div>
  )
}

export default Navbar

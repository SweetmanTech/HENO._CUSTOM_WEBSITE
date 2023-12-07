import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
  const { pathname } = useRouter()

  const isHomePage = pathname === "/"
  const isAboutPage = pathname.includes("/about")
  const isMusicPage = pathname.includes("/music")
  const isMintPage = pathname.includes("/mint")

  return (
    <div className="w-full flex gap-x-[10px]">
      <Link href="/">
        <div
          className={`min-w-[80px] px-[10px] h-[40px] flex items-center justify-center bg-[#8c8c8c] text-[#d2d2d2] font-dresden cursor-pointer
        ${isHomePage ? "!bg-[#347fdb]" : ""}`}
        >
          Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={`min-w-[80px] px-[10px] h-[40px] flex items-center justify-center bg-[#8c8c8c] text-[#d2d2d2] font-dresden cursor-pointer
        ${isAboutPage ? "!bg-[#347fdb]" : ""}`}
        >
          About
        </div>
      </Link>
      <Link href="/music">
        <div
          className={`min-w-[80px] px-[10px] h-[40px] flex items-center justify-center bg-[#8c8c8c] text-[#d2d2d2] font-dresden cursor-pointer
        ${isMusicPage ? "!bg-[#347fdb]" : ""}`}
        >
          Music
        </div>
      </Link>
      <Link href="/mint">
        <div
          className={`min-w-[80px] px-[10px] h-[40px] flex items-center justify-center bg-[#8c8c8c] text-[#d2d2d2] font-dresden cursor-pointer
        ${isMintPage ? "!bg-[#347fdb]" : ""}`}
        >
          Mint
        </div>
      </Link>
      <a href="https://play.mynameisheno.com" target="_blank" rel="noreferrer">
        <div
          className={`min-w-[80px] px-[10px] h-[40px] flex items-center justify-center bg-[#8c8c8c] text-[#d2d2d2] font-dresden cursor-pointer
        ${isMintPage ? "!bg-[#347fdb]" : ""}`}
        >
          Play
        </div>
      </a>
    </div>
  )
}

export default Navbar

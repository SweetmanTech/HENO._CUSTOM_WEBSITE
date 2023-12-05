import Link from "next/link"

const Navbar = () => (
  <div className="w-full flex gap-x-[10px]">
    <Link href="/">
      <div className="min-w-[80px] px-[10px] h-[40px] flex items-center justify-center bg-[#8c8c8c] text-[#d2d2d2] font-dresden cursor-pointer">
        Home
      </div>
    </Link>
    <Link href="/about">
      <div className="min-w-[80px] px-[10px] h-[40px] flex items-center justify-center bg-[#8c8c8c] text-[#d2d2d2] font-dresden cursor-pointer">
        About
      </div>
    </Link>
    <Link href="/music">
      <div className="min-w-[80px] px-[10px] h-[40px] flex items-center justify-center bg-[#8c8c8c] text-[#d2d2d2] font-dresden cursor-pointer">
        Music
      </div>
    </Link>
    <Link href="/mint">
      <div className="min-w-[80px] px-[10px] h-[40px] flex items-center justify-center bg-[#8c8c8c] text-[#d2d2d2] font-dresden cursor-pointer">
        Mint
      </div>
    </Link>
  </div>
)

export default Navbar

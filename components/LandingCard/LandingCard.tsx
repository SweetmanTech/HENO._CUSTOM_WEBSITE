import Image from "next/image"
import Link from "next/link"

const LandingCard = ({ title, img = "/images/landing/web3.jpg", href }) => (
  <Link href={href}>
    <div className="p-2 border-[2px] border-[#d2d2d2] cursor-pointer font-dresden">
      <div className="relative p-4 flex flex-col items-center justify-center border border-[#8c8c8c] h-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={img}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-75" />
        <div className="absolute top-2 left-2 z-20">
          <p className="text-white text-xs">CCTV</p>
        </div>
        <div className="absolute top-2 right-2 z-20 flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
          <p className="text-white text-xs mr-2">REC</p>
          <div className="w-4 h-4 bg-gray-300 rounded-sm" />
        </div>
        <div className="absolute bottom-2 left-2 z-20">
          <p className="text-white text-xs">12:12PM Miami, FL</p>
        </div>
        <div className="absolute bottom-2 right-2 z-20">
          <p className="text-white text-xs">12/12/2023</p>
        </div>
        <div className="relative z-10 p-6">
          <h2 className="text-white text-5xl font-bold mb-2">{title}</h2>
        </div>
      </div>
    </div>
  </Link>
)

export default LandingCard

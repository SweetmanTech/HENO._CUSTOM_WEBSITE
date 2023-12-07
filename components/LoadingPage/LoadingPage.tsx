import Image from "next/image"

const LoadingPage = () => (
  <div className="fixed top-0 left-0 w-full h-full z-50">
    <Image
      blurDataURL="/images/Loading/loading.png"
      alt="SYSTEM"
      layout="fill"
      objectFit="cover"
      src="/images/Loading/loading.png"
    />
  </div>
)

export default LoadingPage

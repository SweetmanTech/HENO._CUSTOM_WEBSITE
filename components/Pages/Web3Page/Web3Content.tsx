import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useEthersSigner } from "../../../hooks/useEthersSigner"
import Trailer from "./Trailer"
import RecBar from "../../RecBar"
import useIsMobile from "../../../hooks/useIsMobile"

const Web3Content = ({ isPopup = false }) => {
  const isMobile = useIsMobile()
  const signer = useEthersSigner()

  return (
    <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
      <div
        className="border-[1px] border-darkgray text-gray_1 font-dresden 
            py-[25px] text-center
            flex items-center justify-center text-[16px] relative h-full
            text-[12px] md:text-[16px] relative"
      >
        {!isMobile && (
          <div
            className={`absolute top-[50px] left-[10%] text-left ${
              isPopup ? "text-[14px]" : "text-[16px]"
            }`}
          >
            1/9/24 <br />
            HYPERSURVEILLED <br />
            ART COLLECTION <br />
            TRAILER
          </div>
        )}
        <div
          className="h-fit max-h-full overflow-y-auto text-[12px] md:text-[16px]
            px-[15px] md:px-[20px] flex flex-col gap-y-[5px] md:gap-y-[20px]"
        >
          {signer ? <Trailer isPopup={isPopup} /> : <ConnectButton />}
        </div>
        <RecBar />
      </div>
    </div>
  )
}

export default Web3Content

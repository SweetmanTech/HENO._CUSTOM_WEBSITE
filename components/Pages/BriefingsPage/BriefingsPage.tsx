import useIsMobile from "@/hooks/useIsMobile"
import Layout from "@/components/Layout"
import SeoHead from "@/components/SeoHead"
import { useState } from "react"
import Input from "@/components/Core/Input"
import RecBar from "@/components/RecBar"
import BackPortalButton from "@/components/BackPortalButton"
import getIpfsLink from "@/lib/getIpfsLink"
import { SYSTEM_COMMERCIAL } from "@/lib/consts"

const BriefingsPage = () => {
  const isMobile = useIsMobile()
  const [answer, setAnswer] = useState("")

  return (
    <Layout type={isMobile ? "mobile" : "full"}>
      <SeoHead title="HENO. Employee" image="/images/Landing/web3.jpeg" />
      <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full w-full">
        <div
          className="border-[1px] border-darkgray text-gray_1 font-dresden 
                    py-[25px] text-center relative h-full
                    flex flex-col items-center justify-center gap-3"
        >
          <section className="w-[90%] md:w-[50%] aspect-video bg-white rounded-2xl flex items-center justify-center">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video src={getIpfsLink(SYSTEM_COMMERCIAL)} controls />
          </section>
          <p className="text-[20px] uppercase">Mission/Question</p>
          <Input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            id="answer"
            name="answer"
            className="!w-[250px] md:!w-[320px] !text-[16px] !h-10 !text-center"
            hookToForm={false}
            placeholder="TYPE ANSWER HERE"
          />
          <RecBar cctvNumber={6} />
          <BackPortalButton />
          <p
            className="uppercase text-white mx-auto absolute right-2 md:right-10 bottom-10 border border-white px-3 py-1
          text-[12px] md:text-[14px]"
          >
            Mission brefings
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default BriefingsPage

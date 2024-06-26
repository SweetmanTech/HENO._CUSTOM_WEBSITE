"use client"

import useIsMobile from "@/hooks/useIsMobile"
import Layout from "@/components/Layout"
import { useState } from "react"
import Input from "@/components/Core/Input"
import RecBar from "@/components/RecBar"
import BackPortalButton from "@/components/BackPortalButton"
import Media from "@/components/Core/Media"

const IntelPage = () => {
  const isMobile = useIsMobile()
  const [answer, setAnswer] = useState("")

  return (
    <Layout type={isMobile ? "mobile" : "full"}>
      <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full w-full">
        <div
          className="border-[1px] border-darkgray text-gray_1 font-dresden 
                    py-[25px] text-center relative h-full
                    flex flex-col items-center justify-center gap-3"
        >
          <section className="w-[320px] h-[300px] md:h-auto md:w-auto gap-4 flex flex-col md:flex-row items-center justify-center">
            <Media
              type="image"
              link="/images/Employee/intel-1.png"
              blurLink="/images/Employee/intel-1.png"
              containerClasses="aspect-[556/720] w-[250px] md:w-[300px]"
            />
            <Media
              type="image"
              link="/images/Employee/intel-2.png"
              blurLink="/images/Employee/intel-2.png"
              containerClasses="aspect-[556/720] w-[250px] md:w-[300px]"
            />
          </section>
          <p className="text-[20px] uppercase">Intel/Question</p>
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
            Intel
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IntelPage

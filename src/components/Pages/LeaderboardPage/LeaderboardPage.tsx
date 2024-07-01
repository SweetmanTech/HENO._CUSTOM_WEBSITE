"use client"

import useIsMobile from "@/hooks/useIsMobile"
import Layout from "@/components/Layout"
import RecBar from "@/components/RecBar"
import BackPortalButton from "@/components/BackPortalButton"

const LeaderboardPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "full"}>
      <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full w-full">
        <div
          className="border-[1px] border-darkgray text-gray_1 font-dresden 
                    py-[25px] text-center relative h-full
                    flex flex-col items-center justify-center gap-3"
        >
          <section className="border-[2px] rounded-xl overflow-hidden">
            <iframe
              src={`https://www.stack.so/leaderboard/leaderboard-40a3-78225-${process.env.NEXT_PUBLIC_POINT_SYSTEM_ID}/embed?excludeHeader=true`}
              className="mx-auto"
              width="704px"
              height="400px"
              allow="clipboard-write"
              title="leaderboard"
            />
          </section>
          <RecBar cctvNumber={6} />
          <BackPortalButton />
          <p
            className="uppercase text-white mx-auto absolute right-2 md:right-10 bottom-10 border border-white px-3 py-1
          text-[12px] md:text-[14px]"
          >
            Leaderboard
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default LeaderboardPage

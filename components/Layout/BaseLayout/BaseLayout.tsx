import React from "react"
import { ILayout } from "../types"
import Navbar from "../../Navbar"
import CameraFeed from "../../CameraFeed"
import CameraFeedProvider from "../../../providers/CameraFeedProvider"
import DateSelect from "../../DateSelect"
import DateSelectProvider from "../../../providers/DateSelectProvider"
import { usePageLoad } from "../../../providers/PageLoadProvider"

const BaseLayout = ({ children }: ILayout) => {
  const { entered } = usePageLoad()

  return (
    <div className="w-screen h-screen p-[50px]">
      <div className="flex flex-col h-[calc(100vh-145px)] gap-y-[5px]">
        {entered && <Navbar />}
        <div className="flex flex-grow h-full gap-x-[20px]">
          <div className="flex-grow w-[calc(100vw-490px)]">{children}</div>
          {entered && (
            <div className="w-[370px] flex flex-col gap-y-[20px]">
              <div className="border-[#d2d2d2] border-[2px] h-[calc(100%-280px)] py-[10px] overflow-y-auto">
                <CameraFeedProvider>
                  <CameraFeed />
                </CameraFeedProvider>
              </div>
              <div className="border-[#d2d2d2] border-[2px]">
                <DateSelectProvider>
                  <DateSelect />
                </DateSelectProvider>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BaseLayout

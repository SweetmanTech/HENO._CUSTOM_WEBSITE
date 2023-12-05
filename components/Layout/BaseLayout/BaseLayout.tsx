import React from "react"
import SeoHead from "../../SeoHead"
import { ILayout } from "../types"
import Navbar from "../../Navbar"
import CameraFeed from "../../CameraFeed"
import CameraFeedProvider from "../../../providers/CameraFeedProvider"

const BaseLayout = ({ children }: ILayout) => (
  <div className="w-screen h-screen p-[50px]">
    <SeoHead title="Landing" />
    <div className="flex flex-col h-full gap-y-[5px]">
      <Navbar />
      <div className="grid grid-cols-12 flex-grow gap-x-[20px]">
        <div className="col-span-9">{children}</div>
        <div className="col-span-3 flex flex-col gap-y-[20px]">
          <div className="border-[#d2d2d2] border-[2px] h-[65%] overflow-y-auto py-[10px]">
            <CameraFeedProvider>
              <CameraFeed />
            </CameraFeedProvider>
          </div>
          <div className="border-[#d2d2d2] border-[2px] flex-grow" />
        </div>
      </div>
    </div>
  </div>
)

export default BaseLayout

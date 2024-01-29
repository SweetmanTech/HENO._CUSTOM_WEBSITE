import React from "react"
import { ILayout } from "../types"
import Navbar from "../../Navbar"
import CameraFeed from "../../CameraFeed"
import CameraFeedProvider from "../../../providers/CameraFeedProvider"
import { usePageLoad } from "../../../providers/PageLoadProvider"

const BaseLayout = ({ children }: ILayout) => {
  const { entered } = usePageLoad()

  return (
    <div className="w-screen h-screen py-[30px] px-[50px]">
      <div className="flex flex-col h-[calc(100vh-105px)] gap-y-[5px]">
        {entered && <Navbar />}
        <div className="flex flex-grow h-full gap-x-[20px]">
          <div className="flex-grow w-[calc(100vw-490px)]">{children}</div>
          {entered && (
            <div className="w-[370px] flex flex-col gap-y-[20px]">
              <div className="border-gray_1 border-[2px] flex-grow py-[10px] overflow-y-auto">
                <CameraFeedProvider>
                  <CameraFeed />
                </CameraFeedProvider>
              </div>
              <div className="border-gray_1 border-[2px]">
                <a href="https://play.mynameisheno.com" target="_blank" rel="noreferrer">
                  {/* eslint-disable-next-line  @next/next/no-img-element */}
                  <img src="/images/Landing/play_relief.png" alt="not found relief" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BaseLayout

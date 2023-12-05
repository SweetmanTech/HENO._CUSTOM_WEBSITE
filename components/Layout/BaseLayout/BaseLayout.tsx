import React from "react"
import SeoHead from "../../SeoHead"
import { ILayout } from "../types"
import Navbar from "../../Navbar"

const BaseLayout = ({ children }: ILayout) => (
  <div className="w-screen h-screen p-[50px]">
    <SeoHead title="Landing" />
    <div className="flex flex-col h-full gap-y-[5px]">
      <Navbar />
      <div className="grid grid-cols-12 flex-grow gap-x-[30px]">
        <div className="col-span-9">{children}</div>
        <div className="col-span-3 flex flex-col gap-y-[20px]">
          <div className="border-[#d2d2d2] border-[2px] h-[65%]" />
          <div className="border-[#d2d2d2] border-[2px] flex-grow" />
        </div>
      </div>
    </div>
  </div>
)

export default BaseLayout

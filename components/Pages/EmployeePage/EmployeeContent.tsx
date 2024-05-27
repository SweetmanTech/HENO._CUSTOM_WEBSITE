import Media from "@/components/Core/Media"
import useClickOutsideSelect from "@/hooks/useClickOutsideSelect"
import Icon from "@/components/Core/Icon"
import { useEmployee } from "@/providers/EmployeeProvider"
import { milestones } from "@/hooks/useEmployeeData"
import RecBar from "@/components/RecBar"

const EmployeeContent = ({ isPopup = false }) => {
  const { selectRef, setIsVisibleSelect, isVisibleSelect } = useClickOutsideSelect()
  const { selectedValue, setSelectedValue } = useEmployee()

  const handleClick = (value) => {
    setSelectedValue(value)
    setIsVisibleSelect(!isVisibleSelect)
  }

  return (
    <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
      <div
        className="border-[1px] border-darkgray text-gray_1 font-dresden 
              py-[25px] text-center
              flex items-center justify-center text-[16px] relative h-full
              text-[12px] md:text-[16px] relative"
      >
        <div
          className="h-fit max-h-full text-[12px] md:text-[16px]
              px-[15px] md:px-[20px] flex flex-col
              flex flex-col items-center"
        >
          <Media
            type="image"
            link="/images/Landing/about.jpeg"
            blurLink="/images/Landing/about.jpeg"
            containerClasses={`${isPopup ? "w-[100px]" : "w-[150px] "} aspect-[4000/6016]`}
          />
          <p className="mt-2">Employee ID: heno.eth</p>
          <p>Points: 111</p>
          <div ref={selectRef} className="relative">
            <button
              type="button"
              onClick={() => setIsVisibleSelect(!isVisibleSelect)}
              className="border-[2px] px-3 py-1 rounded-sm flex items-center"
            >
              {selectedValue}
              <Icon name={`${isVisibleSelect ? "arrowUp" : "arrowDown"}`} raw />
            </button>
            {isVisibleSelect && (
              <div
                className="absolute left-0 top-full z-[100] border-[2px]
                        w-full gap-2 rounded-sm space-y-2 py-1 bg-black"
              >
                {milestones.map((milestone) => (
                  <button type="button" onClick={() => handleClick(milestone)} key={milestone}>
                    {milestone}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <RecBar cctvNumber={6} />
      </div>
    </div>
  )
}

export default EmployeeContent

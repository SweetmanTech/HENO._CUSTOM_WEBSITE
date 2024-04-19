import RecBar from "../../RecBar"
import ContactForm from "./ContactForm"
import { useContact } from "../../../providers/ContactProvider"
import { SCREEN } from "../../../hooks/useContactData"
import ContactSuccess from "./ContactSuccess"

const ContactContent = ({isCam = false}) => {
  const { screenStatus } = useContact()

  return (
    <div className={`p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full ${isCam && "!p-[5px]"}`}>
      <div
        className={`border-[1px] border-darkgray text-gray_1 font-dresden 
        py-[25px] text-center
        flex items-center justify-center relative h-full
        text-[12px] md:text-[16px] relative ${isCam && "!text-[12px]"}`}
      >
        <div
          className={`h-fit max-h-full overflow-y-auto text-[12px] md:text-[16px]
          px-[15px] md:px-[20px] flex flex-col gap-y-[5px] md:gap-y-[20px] ${isCam && "!text-[12px] !gap-y-[5px]"}`}
        >
          {screenStatus === SCREEN.INPUT_MODE && <ContactForm isCam={isCam}/>}
          {screenStatus === SCREEN.SUCCESS && <ContactSuccess isCam={isCam}/>}
        </div>
        <RecBar isCam={isCam} cctvNumber={5}/>
      </div>
    </div>
  )
}

export default ContactContent

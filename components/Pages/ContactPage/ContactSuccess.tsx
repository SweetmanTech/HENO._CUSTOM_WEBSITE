const ContactSuccess = ({ isCam = false }) => (
  <div
    className={`flex justify-center text-gray_1 flex-col
    items-center text-[24px] ${isCam && "!text-[20px]"}`}
  >
    <p>
      INQUIRY HAS BEEN SENT <br /> PLEASE GIVE US 48-72 HRS <br /> TO RESPOND
    </p>
    <p className="mt-[30px]">THANK YOU</p>
  </div>
)

export default ContactSuccess

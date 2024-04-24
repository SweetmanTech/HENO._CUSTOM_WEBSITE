const ContactSuccess = ({ isPopup }) => (
  <div
    className={`flex justify-center text-gray_1 flex-col
    items-center text-[16px] ${isPopup ? "" : "text-[24px]"}`}
  >
    <p>
      INQUIRY HAS BEEN SENT <br /> PLEASE GIVE US 48-72 HRS <br /> TO RESPOND
    </p>
    <p className="mt-[30px]">THANK YOU</p>
  </div>
)

export default ContactSuccess

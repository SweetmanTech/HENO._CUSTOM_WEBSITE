import { SCREEN } from "../../../hooks/useContactData"
import { useContact } from "../../../providers/ContactProvider"
import Form from "../../Core/Form"
import Input from "../../Core/Input"
import TextArea from "../../Core/TextArea"
import { validation } from "./validation"

const ContactForm = () => {
  const {
    userName,
    setUserName,
    subject,
    setSubject,
    emailAddress,
    setEmailAddress,
    message,
    setMessage,
    setScreenStatus,
  } = useContact()

  return (
    <Form
      className="w-full flex flex-col gap-y-[20px] items-end"
      onSubmit={() => setScreenStatus(SCREEN.SUCCESS)}
      validationSchema={validation}
    >
      <div className="w-[400px] text-[22px]">
        <p>ALL BOOKING / INQUIRIES :</p>
        <p>HENOMGMT@GMAIL.COM</p>
      </div>
      <div className="flex items-start gap-[20px]">
        <p className="uppercase text-[20px]">Name</p>
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          id="name"
          name="name"
          className="w-[400px]"
          hookToForm
        />
      </div>
      <div className="flex items-start gap-[20px]">
        <p className="uppercase text-[20px]">Subject</p>
        <Input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-[400px]"
          id="subject"
          name="subject"
          hookToForm
        />
      </div>
      <div className="flex items-start gap-[20px]">
        <p className="uppercase text-[20px]">Email</p>
        <Input
          value={emailAddress}
          className="w-[400px]"
          onChange={(e) => setEmailAddress(e.target.value)}
          id="emailAddress"
          name="emailAddress"
          hookToForm
        />
      </div>
      <div className="flex items-start gap-[20px]">
        <p className="uppercase text-[20px]">Message</p>
        <div>
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-[400px]"
            id="message"
            name="message"
            rows={5}
            hookToForm
          />
          <button
            className="text-white mt-[20px] border-gray_1 border-[2px] py-[5px] px-[20px]"
            type="submit"
          >
            <p className="uppercase text-[20px]">Submit</p>
          </button>
        </div>
      </div>
    </Form>
  )
}

export default ContactForm

import truncateEthAddress from "@/lib/truncateEthAddress"
import { members } from "./ChatRoom"

const MemeberList = () => (
  <div className="flex flex-col">
    {members.map((member) => (
      <button type="button" className="py-2" key={member}>
        {truncateEthAddress(member)}
      </button>
    ))}
  </div>
)

export default MemeberList

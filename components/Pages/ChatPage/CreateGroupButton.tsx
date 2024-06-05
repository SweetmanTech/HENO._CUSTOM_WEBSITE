import { useChat } from "@/providers/ChatProvider"

const CreateGroupButton = () => {
    const { createGroup } = useChat()

    return (
        <button type="button" onClick={createGroup} className="border px-2 py-2">
            Create Group
        </button>
    )
}

export default CreateGroupButton
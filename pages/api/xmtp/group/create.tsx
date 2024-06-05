import { createClient } from "@/lib/xmtp/client";
import { createHandler, Get } from "next-api-decorators"

class CreateGroup {
  @Get()
  async createGroup() {
    const heno = await createClient("./heno.db");
    const groupId = await heno.createGroup();
    return { address: heno.accountAddress, success: true, groupId }
  }
}

export default createHandler(CreateGroup)

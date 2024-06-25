import {StackClient} from "@stackso/js-core";

const getStackClient = () => {
    const stack = new StackClient({
        apiKey: process.env.NEXT_PUBLIC_STACK_KEY, 
        pointSystemId: "leaderboard-40a3-78225-2471",
      });

      return stack
}

export default getStackClient
import getStackClient from "@/lib/stack/getStackClient"
import { useEffect, useState } from "react"
import useConnectedWallet from "./useConnectedWallet"
import { Address } from "viem"

const useStackPoints = () => {
    const [mintPointsEvents, setMintPointsEvents] = useState([])
    const { connectedWallet } = useConnectedWallet()
    const [dropMints, setDropMints] = useState([])
    
    useEffect(() => {
        const init = async () => {
            const stackClient = getStackClient()

            const events = await stackClient.getEvents({
                address: connectedWallet as Address,
                event: 'heno_mints_500',
            })

            setMintPointsEvents(events)
        }

        init()
    }, [])

    return {
        mintPointsEvents
    }
}

export default useStackPoints
"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useParams } from "next/navigation"
import playTrack from "../lib/spotify/playTrack"
import followArtist from "../lib/spotify/followArtist"
import saveTrack from "../lib/spotify/saveTrack"
import getAccessToken from "../lib/spotify/getAccessToken"
import createPlayer from "../lib/spotify/createPlayer"
import login from "../lib/spotify/login"

const SpotifyContext = createContext(null)

const SpotifyProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null)
  const [deviceId, setDeviceId] = useState(null)
  const { query } = useParams() as any

  const playSong = useCallback(async () => {
    await playTrack(accessToken, deviceId)
    await followArtist(accessToken)
    await saveTrack(accessToken)
  }, [accessToken, deviceId])

  const onReady = (deviceIdentity) => {
    setDeviceId(deviceIdentity)
  }

  useEffect(() => {
    if (!accessToken) return
    createPlayer(accessToken, { onReady })
  }, [accessToken])

  useEffect(() => {
    const init = async () => {
      const response = await getAccessToken(query.code)
      setAccessToken(response)
    }
    init()
  }, [query])

  const value = useMemo(() => ({ deviceId, login, playSong }), [deviceId, playSong])

  return <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
}

export const useSpotifyProvider = () => {
  const context = useContext(SpotifyContext)
  if (!context) {
    throw new Error("useSpotifyProvider must be used within a SpotifyProvider")
  }
  return context
}

export default SpotifyProvider

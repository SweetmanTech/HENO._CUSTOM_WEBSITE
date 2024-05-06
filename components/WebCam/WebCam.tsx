import { usePageLoad } from "@/providers/PageLoadProvider"

const WebCam = () => {
  const { granted, grantCamera, videoRef } = usePageLoad()

  return (
    <div className="w-full h-full">
      {!granted && (
        <button
          type="button"
          className="w-full h-full flex justify-center items-center"
          onClick={grantCamera}
        >
          <p className="text-white text-xl">Verify Identity</p>
        </button>
      )}
      {granted && <video ref={videoRef} autoPlay playsInline muted className="w-full h-full" />}
    </div>
  )
}

export default WebCam

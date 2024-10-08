const DropCollect = ({ isPopup, children, title, artist, animationUrl }) => (
  <div className="w-full flex flex-col gap-1.5">
    <video
      src={animationUrl}
      preload="auto"
      controls
      playsInline
      webkit-playsinline
      x5-playsinline
      muted
      className={`${isPopup ? "h-[200px]" : "h-[300px]"}`}
    />
    {children}
    <span className={`uppercase text-[12px] ${isPopup ? "md:text-[14px]" : "md:text-[16px]"}`}>
      {title} By {artist}
    </span>
  </div>
)

export default DropCollect

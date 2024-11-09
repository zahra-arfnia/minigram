function UserAvatar({size , imgSrc , showUsername , showId , username , id}) {
  return (
    <div className="flex gap-3.5 items-center">
      <img src={imgSrc ? imgSrc : "/images/default-profile.jpeg"} className={size===48 ? "w-12 h-12 rounded-full" : size===40 ?"w-10 h-10 rounded-full" : ""}/>
      <div>
        <p className={showUsername ? "text-base font-medium" : "hidden"}>{username}</p>
        <p className={showId ? "text-xs font-medium text-[#727383]" : "hidden"}>{id}</p>
      </div>
    </div>
  )
}

export default UserAvatar;
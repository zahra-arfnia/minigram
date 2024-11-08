import React from "react"

export default function Dialog(props) {
    // we also get an isOpen state in the props
    // lift up the state?????
  return (
    <div className="text-[24px] flex w-[600px] h-[150px] flex-col items-start justify-around border-[1px] border-strongGray rounded px-4 bg-midBlack">
      {/* for title use props.title */}
      <h1>Are you sure you want to delete this post?</h1>
      {/* for text use props.text */}
      <div className="flex items-center justify-center gap-5 text-[12px]">
        {/* for buttons use props.btn1 and props.btn2 */}
        {/* sign out =>yes/no */}
        {/* delete/cancel */}

        <button className="bg-purple rounded text-white w-[140px] h-[30px]">YES</button>
        <button className="bg-strongGray rounded text-white w-[140px] h-[30px]">NO</button>
      </div>
    </div>
  )
}

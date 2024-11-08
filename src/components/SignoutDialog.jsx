import React from "react"
import useSignIn from "../stores/useSignIn"

export default function Dialog(props) {
  const isSignedIn = useSignIn((state) => state.isSignedIn)
  const signOut = useSignIn((state) => state.actions.signOut)

  return (
    <div className="flex h-[150px] w-[600px] flex-col items-start justify-around rounded border-[1px] border-strongGray bg-midBlack px-4 text-[24px]">
      {/* for title use props.title */}
      <h1>Are you sure you want to sign out of your account?</h1>
      {/* for text use props.text */}
      <div className="flex items-center justify-center gap-5 text-[12px]">
        {/* for buttons use props.btn1 and props.btn2 */}
        {/* sign out =>yes/no */}
        {/* delete/cancel */}

        <button
          className="h-[30px] w-[140px] rounded bg-purple text-white"
          onClick={signOut}
        >
          YES
        </button>
        <button className="h-[30px] w-[140px] rounded bg-strongGray text-white">
          NO
        </button>
      </div>
    </div>
  )
}

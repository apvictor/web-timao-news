import { ShareNetwork } from "@phosphor-icons/react";

export function Header() {

  return (
    <div className="px-4 w-full py-3 flex justify-between items-center border-white border-solid border-b-2 rounded-b-2xl bg-black fixed top-0">
      <img src="../../public/logo.png" />
      <p className="text-2xl text-white font-bold">Timão News</p>
      <ShareNetwork size={38} className="text-white"/>
    </div>
  )
}

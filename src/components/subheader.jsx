import { GoBellFill, GoChevronDown } from "react-icons/go";
import { MdOutlineToggleOff } from "react-icons/md";
import Avatar from "../assets/images/avatar.png";

export default function SubHeader({ title = "Dashboard" }) {
  return (
    <div className="px-6 flex flex-row justify-between items-center">
      <h1 className="font-bold text-2xl text-black"> {title} </h1>

      <div className="flex flex-row justify-end space-x-8 items-center">
        <div className="flex flex-row justify-start items-center space-x-2">
          <MdOutlineToggleOff className="text-4xl text-[#757575]" />
          <span className="text-[#BDC1C6]">Testnet</span>
        </div>

        <GoBellFill className="text-2xl text-[#BDC1C6]" />

        <div className="flex flex-row justify-start items-center space-x-1">
          <img src={Avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <GoChevronDown className="text-2xl text-[#BDC1C6]" />
        </div>
      </div>
    </div>
  );
}

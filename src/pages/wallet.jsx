import Sidebar from "../components/sidebar";
import { useState } from "react";
import cn from "classnames";
import SubHeader from "../components/subheader";
import NumberFormat from "../components/numberformat";
import { IoIosArrowRoundUp } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { PiCurrencyNgnLight } from "react-icons/pi";
import { RiBtcLine } from "react-icons/ri";
import RecentTransactions from "../components/recenttransactions";
import SwapWidget from "../components/swapwidget";

const walletStats = [
  {
    name: "Total Balance",
    icon: CiWallet,
  },

  {
    name: "Fiat Balance",
    icon: PiCurrencyNgnLight,
  },

  {
    name: "Crypto Balance",
    icon: RiBtcLine,
  },
];

export default function Wallet() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full min-h-screen ">
      {/* overlay  */}

      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={
          "  bg-white  min-h-screen pt-8 space-y-8 pb-16 " +
          cn(
            collapsed && " ml-[60px] ",
            !collapsed && "  md:ml-[20%] lg:ml-[20%] xl:ml-[15%] "
          )
        }
      >
        {/* l1 */}

        <SubHeader title="Wallet" />

        {/* l2 */}

        <div className="flex flex-row justify-start items-center space-x-12 px-6">
          {walletStats.map((v, i) => {
            return (
              <div
                key={i}
                className="bg-[#F8F9FD] flex flex-col p-6 space-y-4 rounded self-stretch group hover:bg-primary cursor-default min-w-[290px] "
              >
                <div className="flex flex-row justify-between">
                  <h1 className="text-[#6D7D93] group-hover:text-white">
                    {v.name}
                  </h1>

                  <div className=" p-1  rounded-full bg-[#6d7d93] ">
                    <v.icon className="text-white  text-3xl" />
                  </div>
                </div>
                <span className="text-2xl inline-block font-bold text-[#6D7D93] group-hover:text-white">
                  <NumberFormat value={i * 1000} />
                </span>

                <p className="text-sm text-[#6D7D9399] group-hover:text-white/60 inline-flex">
                  <span>
                    {" "}
                    <b className="group-hover:text-white"> 12%</b> Increase From
                    Last 30 days
                  </span>

                  <IoIosArrowRoundUp className="text-[#6D7D93] group-hover:text-white text-xl" />
                </p>
              </div>
            );
          })}
        </div>

        <div className="px-6 space-y-6">
          <h3 className="text-black text-xl font-medium">
            Recent Transactions
          </h3>

          <div className="  flex flex-row space-x-2 justify-between items-stretch">
            <div className="self-stretch md:w-[50%] lg:w-[70%] xl:w-[75%]">
              <RecentTransactions limit={10} />
            </div>

            {/* swap widget  */}

            <SwapWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

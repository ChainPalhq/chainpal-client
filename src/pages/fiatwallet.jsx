import Sidebar from "../components/sidebar";
import { useState } from "react";
import cn from "classnames";
import SubHeader from "../components/subheader";
import NumberFormat from "../components/numberformat";
import { IoIosArrowRoundUp } from "react-icons/io";
import RecentTransactions from "../components/recenttransactions";
import SwapWidget from "../components/swapwidget";
import FlagNGN from "../assets/images/flag-ngn.png";
import FlagUSD from "../assets/images/flag-usd.png";
import { BiPlusMedical } from "react-icons/bi";

const walletStats = [
  {
    name: "NGN",
    img: FlagNGN,
    currencyPrefix: "₦",
  },

  {
    name: "USD",
    img: FlagUSD,
    currencyPrefix: "$",
  },
];

export default function FiatWallet() {
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

        <SubHeader
          title="Wallet"
          crumbs={[
            {
              name: "Fiat",
              href: "/wallet/fiat",
            },
          ]}
        />

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

                  <div className=" p-1  rounded-full  ">
                    <img src={v.img} alt="flag" className="rounded-full" />
                  </div>
                </div>
                <span className="text-2xl inline-block font-bold text-[#6D7D93] group-hover:text-white">
                  <NumberFormat
                    value={i * 150 + 70}
                    prefix={v.currencyPrefix + " "}
                  />
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

          <div className="bg-[#F8F9FD] center p-6 space-y-4  rounded self-stretch group hover:bg-primary cursor-pointer  min-w-[290px]  ">
            <BiPlusMedical className="text-[#6D7D93] group-hover:text-white text-4xl" />
            <p className="text-[#6D7D93] group-hover:text-white text-lg">
              Add Currency
            </p>
          </div>
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

import Sidebar from "../components/sidebar";
import { MdOutlineToggleOff, MdToggleOn } from "react-icons/md";
import { GoBellFill, GoChevronDown } from "react-icons/go";
import Avatar from "../assets/images/avatar.png";
import NumberFormat from "../components/numberformat";
import {
  IoIosArrowRoundDown,
  IoIosArrowRoundUp,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { XAxis, YAxis, AreaChart, Tooltip, Area } from "recharts";
import { useState } from "react";
import cn from "classnames";
import KYCPrompt from "../components/kycprompt";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dashboardItems = [
  {
    name: "Total Revenue",
  },

  {
    name: "Customers",
  },

  {
    name: "Total Payout",
  },

  {
    name: "Balance",
  },
];

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full min-h-screen ">
      {/* overlay  */}

      <KYCPrompt />

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

        <div className="px-6 flex flex-row justify-between items-center">
          <h1 className="font-bold text-2xl text-black">Dashboard</h1>

          <div className="flex flex-row justify-end space-x-8 items-center">
            <div className="flex flex-row justify-start items-center space-x-2">
              <MdOutlineToggleOff className="text-4xl text-[#757575]" />
              <span className="text-[#BDC1C6]">Testnet</span>
            </div>

            <GoBellFill className="text-2xl text-[#BDC1C6]" />

            <div className="flex flex-row justify-start items-center space-x-1">
              <img
                src={Avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <GoChevronDown className="text-2xl text-[#BDC1C6]" />
            </div>
          </div>
        </div>

        {/* l2 */}

        <div className="flex flex-row justify-start items-center space-x-12 px-6">
          {dashboardItems.map((v, i) => {
            return (
              <div
                key={i}
                className="bg-[#F8F9FD] p-6 space-y-4 rounded self-stretch group hover:bg-primary cursor-default"
              >
                <h1 className="text-[#6D7D93] group-hover:text-white">
                  {v.name}
                </h1>
                <span className="text-2xl inline-block font-bold text-[#6D7D93] group-hover:text-white">
                  <NumberFormat value={i * 1000} />
                </span>

                <p className="text-sm text-[#6D7D93] group-hover:text-white/60 inline-flex">
                  <span>
                    {" "}
                    <b className="group-hover:text-white"> 12%</b> Increase From
                    Last 30 days
                  </span>

                  <IoIosArrowRoundUp className="text-green-500 text-xl" />
                </p>
              </div>
            );
          })}
        </div>

        {/* l3 */}

        <div className="px-6 space-y-6">
          <h3 className="text-black text-xl font-medium">Transaction Chart</h3>
          <div className="w-full border border-[#6D7D9326] p-6 rounded shadow">
            <AreaChart
              width={1024}
              className="w-full"
              height={320}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#037BCB" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#037BCB" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#18A0FB" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#18A0FB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="uv" />
              <YAxis dataKey="pv" />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="pv"
                stroke="#037BCB"
                fillOpacity={1}
                fill="url(#colorPv)"
                strokeWidth={3}
              />
            </AreaChart>
          </div>
        </div>

        <div className="px-6 space-y-6">
          <h3 className="text-black text-xl font-medium">
            Recent Transactions
          </h3>

          <div className="w-full border border-[#6D7D9326] p-6 rounded shadow">
            <div className="flex flex-row justify-between items-center  border-b border-[#6D7D9380]">
              <p className="font-bold text-accent pb-6 border-b-2 border-accent">
                Transactions
              </p>

              <div className="inline-flex space-x-2 pb-6 text-[#6D7D93]">
                <p>View more</p>
                <IoIosArrowRoundForward className=" text-2xl" />
              </div>
            </div>

            <table className="appearance-none w-full ">
              <tr className="text-[#6D7D93] w-full text-left ">
                <th className="py-4">Amount</th>
                <th>Customer</th>
                <th>Reference</th>
                <th>Channel</th>
                <th>Date</th>
                <th>Status</th>
              </tr>

              {[1, 2, 3, 4, 5].map((v, i) => {
                return (
                  <tr key={i} className="text-[#6D7D93] w-full text-left">
                    <td className="py-2">
                      <NumberFormat value={i * 1000 + 2900} />
                    </td>
                    <td>James Onos</td>

                    <td>#T537383938739</td>
                    <td>Crypto</td>
                    <td>
                      <span>12/12/2021</span>
                    </td>
                    <td>
                      <span className="text-green-600">Successful</span>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

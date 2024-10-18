import Sidebar from "../components/sidebar";
import { useState } from "react";
import cn from "classnames";
import SubHeader from "../components/subheader";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import NumberFormat from "../components/numberformat";

export default function Customers() {
  const [collapsed, setCollapsed] = useState(false);

  const [showNewLinkForm, setShowNewLinkForm] = useState(false);

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

        <SubHeader title="Customers" />

        <div className="px-6 space-y-6">
          <div className="w-full border border-[#6D7D9326] px-6 text-sm  rounded-xl shadow min-h-screen">
            <div className="flex flex-col justify-center items-center pt-4 pb-4 space-y-1 border-b border-[#6D7D9380] w-full ">
              <div className="flex pb-4 flex-row justify-between items-center w-full">
                <div className="flex  flex-row justify-start items-center space-x-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="search"
                      className=" border border-[#D9D9D9] rounded-xl pl-4 pr-2 py-2 text-sm focus:outline-none drop-shadow-sm"
                      placeholder="Search customers"
                    />
                    <CiSearch className="text-xl absolute top-1/2 -translate-y-1/2 right-2 text-[#262c34]" />
                  </div>

                  <div className="flex flex-row justify-start items-center space-x-2">
                    <FaFilter className=" text-black text-sm" />
                    <span className="text-[#6D7D93] text-sm ">Filters</span>
                  </div>
                </div>

                <div className=" self-center  text-[#6D7D93]">
                  <button
                    onClick={() => setShowNewLinkForm(true)}
                    className="btn-1"
                  >
                    Export CSV
                  </button>
                </div>
              </div>
            </div>

            <div className="max-h-[90vh] overflow-y-scroll custom-scrollbar">
              <table className="appearance-none w-full ">
                <tr className="text-[#6D7D93] w-full text-left border-b border-[#6D7D9380] ">
                  <th className="py-4">Name</th>
                  <th>Email</th>
                  <th>ID</th>
                  <th>Date</th>
                </tr>

                {Array(5)
                  .fill(1)
                  .map((v, i) => {
                    return (
                      <tr key={i} className="text-[#6D7D93] w-full text-left">
                        <td className="py-4"> Samuel Jones</td>

                        <td> samueljones@gmail.com</td>

                        <td>CUS_gqns7msy4ehfn1m</td>

                        <td>
                          <span>12/12/2021</span>
                        </td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

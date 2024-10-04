import Sidebar from "../components/sidebar";
import { useState } from "react";
import cn from "classnames";
import SubHeader from "../components/subheader";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import FiatPayoutTable from "../components/payout/fiatpayouttable";
import CryptoPayoutTable from "../components/payout/cryptopayouttable";
import PayoutRequestForm from "../components/payout/payoutrequestform";

export default function Payout() {
  const [collapsed, setCollapsed] = useState(false);

  const [showIndex, setShowIndex] = useState(0);
  const [showPayoutForm, setShowPayoutForm] = useState(false);

  function chooseIndex(index) {
    return () => setShowIndex(index);
  }

  return (
    <div className="w-full min-h-screen ">
      {/* overlay  */}

      {showPayoutForm && (
        <PayoutRequestForm hideMe={() => setShowPayoutForm(false)} />
      )}

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

        <SubHeader title="Payouts" />

        <div className="px-6 space-y-6">
          <div className="w-full border border-[#6D7D9326] px-6 pt-4 rounded-xl shadow">
            <div className="flex flex-col justify-center items-center space-y-1 border-b border-[#6D7D9380] w-full">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex fleex-row justify-start items-center space-x-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="search"
                      className=" border border-[#D9D9D9] rounded-xl pl-4 pr-2 py-2 text-sm focus:outline-none drop-shadow-sm"
                      placeholder="Search Payouts"
                    />
                    <CiSearch className="text-xl absolute top-1/2 -translate-y-1/2 right-2 text-[#262c34]" />
                  </div>

                  <div className="flex flex-row justify-start items-center space-x-2">
                    <FaFilter className=" text-black text-sm" />
                    <span className="text-[#6D7D93] text-sm ">
                      Filtered by status
                    </span>
                  </div>
                </div>

                <div className="inline-flex space-x-2 pb-6 text-[#6D7D93]">
                  <button
                    onClick={() => setShowPayoutForm(true)}
                    className="btn-1"
                  >
                    Payout Request
                  </button>
                </div>
              </div>

              <div className="flex flex-row justify-start items-center w-full space-x-8">
                {["Fiat", "Crypto"].map((item, index) => {
                  return (
                    <span
                      key={index}
                      onClick={chooseIndex(index)}
                      className={
                        `text-[#6D7D93] border-b-2 pb-1 inline-block  pl-1 pr-8 text-sm cursor-pointer ` +
                        cn(
                          showIndex === index && " border-[#304DAF] ",
                          showIndex !== index && " border-transparent "
                        )
                      }
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="max-h-[90vh] overflow-y-scroll custom-scrollbar">
              {showIndex === 0 ? <FiatPayoutTable /> : <CryptoPayoutTable />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Sidebar from "../components/sidebar";
import { useState } from "react";
import cn from "classnames";
import SubHeader from "../components/subheader";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import FiatPayoutTable from "../components/payout/fiatpayouttable";
import CryptoPayoutTable from "../components/payout/cryptopayouttable";
import PayoutRequestForm from "../components/payout/payoutrequestform";
import NumberFormat from "../components/numberformat";

export default function Invoice() {
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

        <SubHeader title="Invoice" />

        <div className="px-6 space-y-6">
          <div className="w-full border border-[#6D7D9326] px-6  rounded-xl shadow">
            <div className="flex flex-col justify-center items-center pt-4 pb-4 space-y-1 border-b border-[#6D7D9380] w-full">
              <div className="flex pb-4 flex-row justify-between items-center w-full">
                <div className="flex  flex-row justify-start items-center space-x-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="search"
                      className=" border border-[#D9D9D9] rounded-xl pl-4 pr-2 py-2 text-sm focus:outline-none drop-shadow-sm"
                      placeholder="Search invoice"
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

                <div className=" self-center  text-[#6D7D93]">
                  <button
                    onClick={() => setShowPayoutForm(true)}
                    className="btn-1"
                  >
                    Payout Request
                  </button>
                </div>
              </div>
            </div>

            <div className="max-h-[90vh] overflow-y-scroll custom-scrollbar">
              <table className="appearance-none w-full ">
                <tr className="text-[#6D7D93] w-full text-left border-b border-[#6D7D9380] ">
                  <th className="py-4">Invoice ID</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>

                {Array(20)
                  .fill(1)
                  .map((v, i) => {
                    return (
                      <tr key={i} className="text-[#6D7D93] w-full text-left">
                        <td>#0123</td>

                        <td>Jack Sparrow</td>

                        <td>jacksparrow@gmail.com</td>

                        <td>
                          <span>12/12/2021</span>
                        </td>
                        <td className="py-2">
                          <NumberFormat value={i * 1000 + 2900} />
                        </td>

                        <td>
                          <span className="text-green-600">Paid</span>
                        </td>
                      </tr>
                    );
                  })}
              </table>
            </div>

            <div className="max-h-[90vh] overflow-y-scroll custom-scrollbar">
              <table className="appearance-none w-full ">
                <tr className="text-[#6D7D93] w-full text-left ">
                  <th className="py-4">Amount</th>
                  <th>Customer</th>
                  <th>Reference</th>
                  <th>Channel</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>

                {Array(20)
                  .fill(1)
                  .map((v, i) => {
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
    </div>
  );
}

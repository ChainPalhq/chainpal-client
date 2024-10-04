import Sidebar from "../components/sidebar";
import NumberFormat from "../components/numberformat";
import { useState } from "react";
import cn from "classnames";
import SubHeader from "../components/subheader";
import { useParams } from "wouter";
import { MdContentCopy } from "react-icons/md";

export default function TransactionDetail() {
  const [collapsed, setCollapsed] = useState(false);

  const { transactionId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  function chooseIndex(index) {
    return () => setShowIndex(index);
  }

  const crumbs = [
    {
      name: transactionId,
      link: "/transactions/" + transactionId,
    },
  ];

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

        <SubHeader title="Transactions" crumbs={crumbs} />

        <div className="px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 w-full ">
            <div className=" space-y-6 ">
              <DetailItem
                name={
                  <div className="flex flex-col justify-start items-start space-y-2">
                    <span className="font-medium text-sm">Amount</span>

                    <span className="text-[#6D7D93]  font-bold text-3xl">
                      <NumberFormat value={363338} />
                    </span>
                  </div>
                }
                value={
                  <div className="rounded-md px-4 py-2 text-white bg-[#00A478] text-center text-xs">
                    Successful
                  </div>
                }
              />
              <DetailItem name="Reference" value="#T661049096058322" />
              <DetailItem name="Channel" value="Crypto" />
              <DetailItem
                name="Fees"
                value={<NumberFormat value={0.00005} />}
              />
              <DetailItem name="Time" value="12th June, 2021" />
            </div>

            {/* G2  */}
            <div className="w-full  ">
              <div className="flex flex-row justify-start items-center space-x-8 ">
                {["Analytics", "Refunds", "Disputes"].map((v, i) => {
                  return (
                    <div
                      key={i}
                      onClick={chooseIndex(i)}
                      className={
                        `text-[#6D7D93] border-b-2 pb-1 inline-block  px-2 text-sm cursor-pointer ` +
                        cn(
                          showIndex === i && " border-[#304DAF] ",
                          showIndex !== i && " border-transparent "
                        )
                      }
                    >
                      {v}
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-y-8 pt-4">
                <DetailItem2 name="Source" value="Binance Pay" />
                <DetailItem2
                  name="Address"
                  value={
                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span> 0x7e2e...8893f73ed23 </span>
                      <MdContentCopy className="text-[#6D7D93] cursor-pointer text-base" />
                    </div>
                  }
                />

                <DetailItem2
                  name="IP Address"
                  value={
                    <span className="text-[#304DAF] underline">
                      {" "}
                      93.193.18.33{" "}
                    </span>
                  }
                />

                <DetailItem2 name="Device Type" value="Desktop" />
                <DetailItem2 name="Customer Name" value="Andrews Onos" />
                <DetailItem2
                  name="Customer Email"
                  value="andrews22@gmail.com"
                />

                <DetailItem2
                  name={<span className="text-[#EB4335]"> Errors </span>}
                  value="0"
                />

                <DetailItem2 name="Attempts" value="1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ name, value }) {
  return (
    <div className="flex flex-row justify-between items-center  pb-3 border-b text-[#6D7D93] text-sm">
      <div className="font-medium"> {name} </div>

      <div className="font-bold">{value}</div>
    </div>
  );
}

function DetailItem2({ name, value }) {
  return (
    <div className="text-sm">
      <h1 className="text-[#6D7D93] font-bold"> {name} </h1>

      <span className="text-[#6D7D93]"> {value} </span>
    </div>
  );
}

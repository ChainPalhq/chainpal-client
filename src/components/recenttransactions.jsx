import { IoIosArrowRoundForward } from "react-icons/io";
import NumberFormat from "./numberformat";

export default function RecentTransactions({ limit = 10 }) {
  return (
    <div className="w-full border border-[#6D7D9326] p-6 rounded shadow h-full">
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

        {Array(limit)
          .fill(0)
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
  );
}

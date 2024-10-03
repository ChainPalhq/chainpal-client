import NumberFormat from "../numberformat";

export default function CryptoPayoutTable() {
  return (
    <table className="appearance-none w-full ">
      <tr className="text-[#6D7D93] w-full text-left ">
        <th className="py-4">Crypto Amount</th>
        <th>Recipient Address</th>
        <th> Amount in Fiat</th>
        <th>Payout ID</th>
        <th>Date</th>
        <th>Status</th>
      </tr>

      {Array(20)
        .fill(1)
        .map((v, i) => {
          return (
            <tr key={i} className="text-[#6D7D93] w-full text-left">
              <td className="py-2">
                <NumberFormat value={2000 + i * 1000} prefix="" /> USDC
              </td>
              <td> 0x983...f3fFb5e5 </td>

              <td className="py-2">
                <NumberFormat value={750000 + i * 1000000} />
              </td>

              <td>#P537383938739</td>

              <td>
                <span>12/12/2021</span>
              </td>
              <td>
                <span className="text-green-600">Paid</span>
              </td>
            </tr>
          );
        })}
    </table>
  );
}

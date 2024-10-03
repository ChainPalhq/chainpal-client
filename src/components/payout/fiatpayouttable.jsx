import NumberFormat from "../numberformat";

export default function FiatPayoutTable() {
  return (
    <table className="appearance-none w-full ">
      <tr className="text-[#6D7D93] w-full text-left ">
        <th className="py-4">Payout Amount</th>
        <th>Recipient</th>
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
                <NumberFormat value={i * 1000 + 2900} />
              </td>
              <td> ChainPal </td>

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

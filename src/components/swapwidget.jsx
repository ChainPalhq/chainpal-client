import NumberFormat from "./numberformat";
import NumberFormattingField from "./forms/numberformattingfield";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import cn from "classnames";
import DropDownList from "./dropdownlist";

const cryptoCurrencies = [
  {
    name: "BTC",
  },
  {
    name: "ETH",
  },
  {
    name: "USDT",
  },
];

export default function SwapWidget() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(cryptoCurrencies[0]);

  function onSelectCurrency(currency) {
    setSelectedCurrency(currency);
    setShowDropdown1(false);
  }

  return (
    <div className="md:w-[50%] lg:w-[30%] xl:w-[25%] self-stretch  p-6 rounded border  bg-[#F8F9FD] flex flex-col justify-start items-center space-y-4">
      <h1 className="text-[#6D7D93] font-medium">Swap</h1>

      <div className="w-full space-y-2">
        <label className="text-sm text-[#6D7D93]">Select Currency</label>
        <div className="relative">
          <div
            onClick={() => setShowDropdown1(!showDropdown1)}
            className="rounded-[5px] px-4 py-3 border border-[#00000042] flex flex-row justify-between space-x-2 text-base font-medium cursor-pointer "
          >
            <span className="inline-block self-center">
              {selectedCurrency.name
                ? cryptoCurrencies.find(
                    (item) => item.name === selectedCurrency.name
                  ).name
                : "Currency"}
            </span>
            <GoChevronDown
              className={
                "text-xl text-[#6D7D93] self-center " +
                cn(showDropdown1 && "transform rotate-180")
              }
            />
          </div>

          {/* dropdown  */}

          <DropDownList
            items={cryptoCurrencies}
            onSelect={onSelectCurrency}
            show={showDropdown1}
            closeSelf={() => setShowDropdown1(false)}
          />
        </div>
      </div>

      <div className="w-full space-y-2">
        <label className="text-sm text-[#6D7D93] flex flex-row justify-start items-center space-x-1">
          Amount to Convert
        </label>
        <NumberFormattingField
          name="outputAmount"
          extraClasses=" text-right"
          type="text"
          placeholder="0.00"
          iconPadding
          icon={({ className }) => <span className={className}>BTC</span>}
        />
      </div>

      {/* detail  */}
      <div className="space-y-4 w-full pt-6">
        {/* 1 */}
        <div className="flex flex-row justify-between items-center text-[#6D7D93] font-medium text-sm">
          <span>Conversion Fee</span>
          <span>
            ~&nbsp;
            <NumberFormat prefix="₦" value={1000} />
          </span>
        </div>

        {/* 2 */}

        <div className="flex flex-row justify-between items-center text-[#6D7D93] font-medium text-sm">
          <span>Amount we'll convert</span>
          <span>
            ~&nbsp;
            <NumberFormat prefix="BTC" value={0.025} />
          </span>
        </div>

        {/* 3 */}

        <div className="flex flex-row justify-between items-center text-[#6D7D93] font-medium text-sm">
          <span>Current Rate</span>
          <span>
            x&nbsp;
            <NumberFormat prefix="" value={10272733} />
          </span>
        </div>

        {/* 4 */}

        <div className="w-full flex flex-col justify-start items-start text-[#6D7D93] font-medium text-sm space-y-4 pt-4">
          <span>Amount to Receive</span>

          <div className="flex flex-row justify-between items-center w-full ">
            <span>NGN</span>
            <span>
              <NumberFormat prefix="₦" value={25000} />
            </span>
          </div>
        </div>

        {/* submit */}

        <div className="center w-full pt-6">
          <button className="btn-1 max-w-[250px] ">Convert</button>
        </div>
      </div>
    </div>
  );
}

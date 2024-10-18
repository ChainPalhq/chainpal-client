import { Form, Formik } from "formik";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DropDownList from "../dropdownlist";
import { GoChevronDown } from "react-icons/go";
import cn from "classnames";
import { useState } from "react";
import NumberFormattingField from "../forms/numberformattingfield";

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

const payoutAddresses = [
  {
    name: "My BTC Wallet",
  },
  {
    name: "My ETH Wallet",
  },
  {
    name: "My USDT Wallet",
  },
];

export default function CryptoPayout({ hideMe }) {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(cryptoCurrencies[0]);
  const [selectedPayoutAddress, setSelectedPayoutAddress] = useState(
    payoutAddresses[0]
  );

  function onSelectCurrency(currency) {
    setSelectedCurrency(currency);
    setShowDropdown1(false);
  }

  function onSelectPayoutAddress(payoutAddress) {
    setSelectedPayoutAddress(payoutAddress);
    setShowDropdown2(false);
  }

  return (
    <div className="w-full">
      <Formik initialValues={{}}>
        {({ isValid }) => {
          return (
            <Form className="space-y-8 w-full">
              <div className="max-w-[437px]">
                <label className="text-sm text-[#6D7D93]">
                  Select Currency
                </label>
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
              <div className="max-w-[437px] relative">
                <label className="text-sm text-[#6D7D93]">Enter amount</label>
                <NumberFormattingField
                  name="inputAmount"
                  type="text"
                  placeholder=""
                  iconPadding
                  icon={({ className }) => (
                    <span className={className}>BTC</span>
                  )}
                />

                <span className="text-xs text-[#0070E0] text-right absolute -bottom-[25%] right-0">
                  Bal: 0.00233 BTC
                </span>
              </div>

              <div className="max-w-[437px]">
                <label className="text-sm text-[#6D7D93] flex flex-row justify-start items-center space-x-1">
                  <span>You will receive </span>

                  <BsFillInfoCircleFill className="text-xs items-center" />
                </label>
                <NumberFormattingField
                  name="outputAmount"
                  type="text"
                  placeholder=""
                  iconPadding
                  icon={({ className }) => (
                    <span className={className}>BTC</span>
                  )}
                />
              </div>

              <div className="max-w-[437px]">
                <label className="text-sm text-[#6D7D93]">
                  Select Payout Address
                </label>
                <div className="relative">
                  <div
                    onClick={() => setShowDropdown2(!showDropdown2)}
                    className="rounded-[5px] px-4 py-3 border border-[#00000042] flex flex-row justify-between space-x-2 text-base font-medium cursor-pointer "
                  >
                    <span className="inline-block self-center">
                      {selectedPayoutAddress.name
                        ? payoutAddresses.find(
                            (item) => item.name === selectedPayoutAddress.name
                          ).name
                        : "Payout Address"}
                    </span>
                    <GoChevronDown
                      className={
                        "text-xl text-[#6D7D93] self-center " +
                        cn(showDropdown2 && "transform rotate-180")
                      }
                    />
                  </div>

                  {/* dropdown  */}

                  <DropDownList
                    items={payoutAddresses}
                    onSelect={onSelectPayoutAddress}
                    show={showDropdown2}
                    closeSelf={() => setShowDropdown2(false)}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-end items-center space-x-8">
                <button onClick={hideMe} className="px-4 py-2 text-[#6D7D93]">
                  {" "}
                  Cancel
                </button>

                <button
                  disabled={isValid}
                  type="submit"
                  className="btn-1 py-2 w-max px-8"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

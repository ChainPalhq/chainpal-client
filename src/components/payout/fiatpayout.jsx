import { Form, Formik } from "formik";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaNairaSign } from "react-icons/fa6";
import { FaDollarSign, FaEuroSign } from "react-icons/fa";
import cn from "classnames";
import { useState } from "react";
import DropDownList from "../dropdownlist";
import { GoChevronDown } from "react-icons/go";
import NumberFormattingField from "../forms/numberformattingfield";

const currencies = [
  {
    name: "NGN",
    icon: FaNairaSign,
  },
  {
    name: "USD",
    icon: FaDollarSign,
  },
  {
    name: "EUR",
    icon: FaEuroSign,
  },
];

const bankAccounts = [
  {
    name: "UNITED BANK OF AMERICA",
  },
  {
    name: "FIRST BANK OF NIGERIA",
  },

  {
    name: "ACCESS BANK",
  },
  {
    name: "ZENITH BANK",
  },
];

export default function FiatPayout({ hideMe }) {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedBankAccount, setSelectedBankAccount] = useState(
    bankAccounts[0]
  );
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  function onSelectCurrency(currency) {
    setSelectedCurrency(currency);
    setShowDropdown1(false);
  }

  function onSelectBankAccount(bankAccount) {
    setSelectedBankAccount(bankAccount);
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
                        ? currencies.find(
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
                    items={currencies}
                    onSelect={onSelectCurrency}
                    show={showDropdown1}
                    closeSelf={() => setShowDropdown1(false)}
                  />
                </div>
              </div>
              <div className="max-w-[437px]">
                <label className="text-sm text-[#6D7D93]">Enter amount</label>
                <NumberFormattingField
                  name="inputAmount"
                  type="text"
                  placeholder=""
                  icon={FaNairaSign}
                />
              </div>

              <div className="max-w-[437px]">
                <label className="text-sm text-[#6D7D93] flex flex-row justify-start items-center space-x-1">
                  <span>You will receive </span>

                  <BsFillInfoCircleFill className="text-xs items-center " />
                </label>
                <NumberFormattingField
                  name="outputAmount"
                  type="text"
                  placeholder=""
                  icon={FaNairaSign}
                />
              </div>

              <div className="max-w-[437px]">
                <label className="text-sm text-[#6D7D93]">
                  Select Bank Account
                </label>
                <div className="relative">
                  <div
                    onClick={() => setShowDropdown2(!showDropdown2)}
                    className="rounded-[5px] px-4 py-3 border border-[#00000042] flex flex-row justify-between space-x-2 text-base font-medium cursor-pointer "
                  >
                    <span className="inline-block self-center">
                      {selectedBankAccount.name
                        ? bankAccounts.find(
                            (item) => item.name === selectedBankAccount.name
                          ).name
                        : "Bank Account"}
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
                    items={bankAccounts}
                    onSelect={onSelectBankAccount}
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

                <button type="submit" className="btn-1 py-2 w-max px-8">
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

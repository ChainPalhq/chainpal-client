import { useState } from "react";
import BrandedField from "../forms/brandedfield";
import { GoChevronDown } from "react-icons/go";
import DropDownList from "../dropdownlist";
import cn from "classnames";

export default function CustomerDetails({
  values,
  setFieldValue,
  discountAsList,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="md:w-[50%]  lg:w-[30%] xl:w-[25%] self-stretch  px-6 rounded   flex flex-col justify-start items-center space-y-4">
      <h1 className="text-sm font-bold text-[#6D7D93]">Customer Details</h1>

      <div className="space-y-6">
        <div className=" text-sm text-[#6D7D93]">
          <label className="whitespace-nowrap"> Invoice No. </label>
          <BrandedField name="invoiceNumber" type="text" extraClasses="py-1 " />
        </div>

        <div className=" text-sm text-[#6D7D93]">
          <label className="whitespace-nowrap">Customer Name</label>
          <BrandedField name="customerName" type="text" extraClasses="py-1 " />
        </div>

        <div className=" text-sm text-[#6D7D93]">
          <label className="whitespace-nowrap">Customer Email</label>
          <BrandedField
            name="customerEmail"
            type="email"
            extraClasses="py-1 "
          />
        </div>

        <div className=" text-sm text-[#6D7D93]">
          <label className="whitespace-nowrap">Due Date</label>
          <BrandedField name="dueDate" type="text" extraClasses="py-1 " />
        </div>

        <div className=" text-sm text-[#6D7D93]">
          <label className="whitespace-nowrap">Tax (%)</label>
          <BrandedField name="taxPercent" type="text" extraClasses="py-1 " />
        </div>

        <div className=" text-sm text-[#6D7D93]">
          <label className="whitespace-nowrap">Discount</label>

          <div className="flex flex-row justify-center items-center space-x-2">
            <div className="relative  w-[50%] pt-2">
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="rounded-[5px] px-4 py-1 border border-[#00000042] flex flex-row justify-between space-x-2 text-base font-medium cursor-pointer "
              >
                <span className="inline-block self-center">
                  {values.discountAs
                    ? discountAsList.find(
                        (item) => item.value === values.discountAs
                      ).name
                    : "Currency"}
                </span>
                <GoChevronDown
                  className={
                    "text-xl text-[#6D7D93] self-center " +
                    cn(showDropdown && "transform rotate-180")
                  }
                />
              </div>

              {/* dropdown  */}

              <DropDownList
                items={discountAsList}
                onSelect={(v) => {
                  setFieldValue("discountAs", v.value);
                  setShowDropdown(false);
                }}
                show={showDropdown}
                closeSelf={() => setShowDropdown(false)}
              />
            </div>

            <div className="w-[50%] ">
              <BrandedField
                name="discount"
                placeholder="0.00"
                type="text"
                extraClasses="py-1  "
              />
            </div>
          </div>
        </div>

        <div className=" text-sm text-[#6D7D93]">
          <label className="whitespace-nowrap">Description</label>
          <BrandedField
            name="description"
            as="textarea"
            type="text"
            extraClasses="py-1  resize-none"
          />
        </div>
      </div>

      <div className="pt-8 flex flex-row justify-between w-full space-x-8 items-center text-sm">
        <button className="btn-1 bg-[#6D7D93] hover:bg-[#3f4956] py-2">
          Draft
        </button>

        <button className="btn-1 py-2">Send</button>
      </div>
    </div>
  );
}

import Logo from "../../assets/images/logo3.png";
import { FiPlus } from "react-icons/fi";
import BrandedField from "../forms/brandedfield";

export default function InvoiceBreakdown() {
  return (
    <div className="w-full border border-[#6D7D9326] py-2  rounded-xl shadow min-h-screen ">
      <div className="space-y-4 text-sm border-b px-2 pb-6">
        <img src={Logo} alt="logo" className=" -translate-x-2 " />

        <div className=" grid grid-cols-2 items-start justify-start w-[15%]  text-[#6D7D93]">
          <span>From</span>

          <span className="font-bold">ChainPal</span>
        </div>

        <div className=" grid grid-cols-2 items-start justify-start w-[15%]  text-[#6D7D93]">
          <span>To</span>

          <span className="font-bold">andrew@tateuni.net</span>
        </div>
      </div>

      {/* fields  */}

      <div className="flex flex-row  justify-between px-2 py-4">
        <div className="text-sm text-[#6D7D93]">
          <label> Invoice Detail </label>
          <BrandedField
            name="invoiceDetail"
            type="text"
            extraClasses="py-1 w-max"
          />
        </div>

        <div className="text-sm text-[#6D7D93]">
          <label> Quantity </label>
          <BrandedField name="quantity" type="text" extraClasses="py-1 w-max" />
        </div>

        <div className="text-sm text-[#6D7D93]">
          <label> Unit Cost (NGN) </label>
          <BrandedField name="unitCost" type="text" extraClasses="py-1 w-max" />
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-2 cursor-pointer mt-8">
        <FiPlus className="text-sm text-[#0070E0]" />
        <span className="text-[#0070E0] text-sm">Add More</span>
      </div>

      {/* stats  */}

      <div className="px-2 space-y-4 mt-8 text-sm">
        <div className="flex flex-row font-bold  items-center justify-between text-[#6D7D93]">
          <span>Subtotal</span>

          <span className="font-bold">NGN 0.00</span>
        </div>

        <div className="flex flex-row font-bold  items-center justify-between text-[#6D7D9366]">
          <span>Discount</span>

          <span className="font-bold">- NGN 0.00</span>
        </div>

        <div className="flex flex-row font-bold  items-center justify-between text-[#6D7D93]">
          <span>Before Tax</span>

          <span className="font-bold">NGN 0.00</span>
        </div>

        <div className="flex flex-row font-bold  items-center justify-between text-[#6D7D9366]">
          <span>Tax</span>

          <span className="font-bold">+ NGN 0.00</span>
        </div>

        <div className="flex flex-row font-bold  items-center justify-between text-[#6D7D93] pt-4">
          <span>Total</span>

          <span className="font-bold">NGN 0.00</span>
        </div>
      </div>
    </div>
  );
}

import Logo from "../assets/images/logo1.png";
import HeroSection from "../components/herosection";
import NomadIcon from "../assets/icons/nomad.png";
import BusinessIcon from "../assets/icons/business.png";
import Loader from "../components/loader";
import { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const accountTypes = [
  {
    description: "Business",
    icon: BusinessIcon,
    name: "BUSINESS",
  },
  {
    description: "Freelancer",
    icon: NomadIcon,
    name: "FREELANCER",
  },
];

export default function AccountType() {
  const [selectedAccountType, setSelectedAccountType] = useState(null);

  const selectAccountType = (type) => {
    return () => {
      setSelectedAccountType(type);
    };
  };

  const isValid = selectedAccountType !== null;

  return (
    <div className="w-full min-h-screen ">
      <main className="w-full grid grid-cols-1 lg:grid-cols-2">
        <HeroSection title="For Business!" />

        <div className="bg-neutral h-screen  flex flex-col justify-start  items-center">
          <div className="w-[80%] pt-16 space-y-4 ">
            <img src={Logo} alt="logo" className=" " />
            <div className="lg:pl-[4vw] flex flex-col space-y-4 ">
              <h1 className="text-2xl lg:text-3xl text-contrast font-bold">
                Account Type
              </h1>

              <p className="text-base text-black ">
                Choose an account type to proceed.
              </p>

              <div className="space-y-16">
                <div className="flex flex-row justify-between items-center pt-8">
                  {accountTypes.map((type, index) => (
                    <div
                      key={index}
                      onClick={selectAccountType(type.name)}
                      className="rounded border py-8 border-accent/20 bg-[#0070E00F] flex flex-row space-x-2 min-w-[200px] items-center justify-center px-4 cursor-pointer hover:ring-1 hover:ring-accent "
                    >
                      <img
                        src={type.icon}
                        alt={type.description}
                        className="w-[32px] h-[32px]"
                      />
                      <span
                        type="button"
                        className="inline-block  text-base text-accent font-medium"
                      >
                        {type.description}
                      </span>
                      {selectedAccountType === type.name && (
                        <IoMdCheckmarkCircle className="text-green-500  text-xl" />
                      )}
                    </div>
                  ))}
                </div>

                <div className=" mt-8 w-full center">
                  <button
                    type="button"
                    role="button"
                    disabled={!isValid}
                    className=" btn-1 w-full "
                  >
                    {false ? <Loader inverted /> : "Next"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

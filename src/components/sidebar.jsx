import Logo from "../assets/images/logo2.png";
import { GoChevronDown } from "react-icons/go";
import SL1 from "../assets/icons/sl1.png";
import SL2 from "../assets/icons/sl2.png";
import SL3 from "../assets/icons/sl3.png";
import SL4 from "../assets/icons/sl4.png";
import SL5 from "../assets/icons/sl5.png";
import SL6 from "../assets/icons/sl6.png";
import SL7 from "../assets/icons/sl7.png";
import SL8 from "../assets/icons/sl8.png";
import SL9 from "../assets/icons/sl9.png";
import SL10 from "../assets/icons/sl10.png";
import SL11 from "../assets/icons/sl11.png";
import SL12 from "../assets/icons/sl12.png";
import SL13 from "../assets/icons/sl13.png";
import cn from "classnames";

const sidebarItems = [
  {
    sectionName: "Financials",

    items: [
      {
        name: "Transactions",
        img: SL1,
      },

      {
        name: "Payout",
        img: SL4,
      },

      {
        name: "Wallet",
        img: SL5,
      },

      {
        name: "Invoice",
        img: SL8,
      },
    ],
  },

  {
    sectionName: "Commerce",

    items: [
      {
        name: "Payment Link",
        img: SL2,
      },

      {
        name: "Store Front",

        img: SL11,
      },

      {
        name: "Customers",
        img: SL13,
      },
      {
        name: "Analytics",
        img: SL6,
      },

      {
        name: "Integration",
        img: SL7,
      },

      {
        name: "Marketplace",
        img: SL12,
      },
    ],
  },

  {
    sectionName: "",
    items: [
      {
        name: "Log out",
        img: SL9,
      },
      {
        name: "Need Help?",

        img: SL10,
      },
    ],
  },
];
export default function Sidebar({ collapsed, setCollapsed }) {
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={
        "fixed inset-y-0 bg-primary    pt-4 text-white min-h-screen " +
        cn(
          collapsed && " w-[60px] ",
          !collapsed && " w-[50%] md:w-[20%] lg:w-[20%] xl:w-[15%] "
        )
      }
    >
      <div
        onClick={toggleCollapse}
        className="flex flex-row justify-start space-x-4 items-center text-white bg-[#023B9240] px-4 py-3 cursor-pointer"
      >
        <img src={Logo} alt="logo" className=" " />

        {!collapsed && <h1 className=" text-lg"> ChainPal</h1>}

        {!collapsed ? (
          <GoChevronDown className="text-2xl text-white/70 cursor-pointer" />
        ) : (
          <GoChevronDown className="text-2xl text-white/70 transform rotate-180 cursor-pointer" />
        )}
      </div>

      <div className="flex flex-row justify-start items-center space-x-2 px-4 py-3 bg-[#0070E029] mt-6 mb-4">
        <img src={SL3} alt="dashboard" className=" " />

        {!collapsed && <h2 className="text-base font-bold">Dashboard</h2>}
      </div>

      <section className=" overflow-y-auto w-full max-h-[80vh] custom-scrollbar pb-16">
        {sidebarItems.map((section, index) => {
          return (
            <div key={index} className="space-y-2 ">
              {section.sectionName && !collapsed ? (
                <h2 className="text-base text-[#BDC1C6] px-4 pt-2">
                  {section.sectionName}
                </h2>
              ) : (
                <>
                  <br />
                </>
              )}

              {section.items.map((item, index) => {
                return (
                  <div
                    key={index}
                    title={collapsed ? item.name : ""}
                    className="flex flex-row justify-start items-center space-x-2 px-4 py-2 hover:bg-[#0070E029] cursor-pointer"
                  >
                    <img src={item.img} alt={item.name} className=" " />

                    {!collapsed && (
                      <h3 className="text-sm font-medium text-white/80">
                        {item.name}
                      </h3>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}

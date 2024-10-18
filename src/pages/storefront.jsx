import Sidebar from "../components/sidebar";
import { useState } from "react";
import cn from "classnames";
import SubHeader from "../components/subheader";
import ComingSoonImage from "../assets/images/coming-soon.png";

export default function StoreFront() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full min-h-screen ">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={
          "  bg-white  min-h-screen pt-8 space-y-8 pb-16 " +
          cn(
            collapsed && " ml-[60px] ",
            !collapsed && "  md:ml-[20%] lg:ml-[20%] xl:ml-[15%] "
          )
        }
      >
        {/* l1 */}

        <SubHeader title="Store Front" />

        <div className="center ">
          <img src={ComingSoonImage} alt="coming soon" className="" />

          <div className="text-[#6D7D93]  space-y-4">
            <h1 className="font-semibold center">Coming Soon</h1>

            <p>
              Dear user, this feature is currently underdevelopment and would be
              made available once it’s live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

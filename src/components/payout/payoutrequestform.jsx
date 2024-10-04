import { useState } from "react";
import BlurOverlay from "../bluroverlay";
import cn from "classnames";
import FiatPayout from "./fiatpayout";
import CryptoPayout from "./cryptopayout";

export default function PayoutRequestForm({ hideMe }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function chooseActiveIndex(i) {
    return () => setActiveIndex(i);
  }

  return (
    <>
      <BlurOverlay />

      <div className="rounded bg-white flex flex-col justify-start items-center fixed top-1/2 left-1/2 z-20 drop-shadow-xl -translate-y-1/2 -translate-x-1/2 p-6 w-full max-w-lg min-h-[30vh] space-y-4 border">
        <div className="space-y-1 center">
          <h1 className="text-2xl text-primary font-bold">Payout Request</h1>
          <p className="text-sm font-medium text-[#000000CC] text-center">
            Ensure your payout information are accurate.
          </p>
        </div>

        {/* switcher  */}
        <div className="grid grid-cols-2 w-full rounded-md bg-[#BDC1C6] p-[2px]">
          {["Fiat", "Crypto"].map((v, i) => {
            const active = activeIndex === i;
            return (
              <div
                onClick={chooseActiveIndex(i)}
                key={i}
                className={
                  "py-2 text-center font-semibold text-base px-4 cursor-pointer " +
                  cn(
                    active && " bg-accent text-white ",
                    !active &&
                      " bg-[#BDC1C6] text-[#00000069] hover:text-black/60  ",

                    i === 0 && " rounded-l-md ",
                    i === 1 && " rounded-r-md ",
                    i === 0 && active && " rounded-r-md ",
                    i === 1 && active && " rounded-l-md "
                  )
                }
              >
                {v} Payout
              </div>
            );
          })}
        </div>

        {activeIndex === 0 ? (
          <FiatPayout hideMe={hideMe} />
        ) : (
          <CryptoPayout hideMe={hideMe} />
        )}
      </div>
    </>
  );
}

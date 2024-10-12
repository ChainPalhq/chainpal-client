import { useState } from "react";
import OTPField from "./otpfield";
import { BsArrowCounterclockwise } from "react-icons/bs";
import cn from "classnames";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import useCountdownTimer from "../utils/hooks/usecountdowntimer";
import Loader from "./loader";
import { endpoints, createFetcher } from "../utils/fetchhelper";

export default function OTPForm({ acuid, rid }) {
  const [args, setArgs] = useState({
    acuid,
    rid,
  });

  const numInputs = 6;
  const [otp, setOtp] = useState("");

  const otpValid = !(!otp || otp.length < numInputs);

  const [_, navigate] = useLocation();

  const [resendCount, setResendCount] = useState(0);

  const url = `${endpoints.verifyEmail}/${args.rid}/${args.acuid}/complete?&code=${otp}`;
  const url2 = `${endpoints.verifyEmail}/${args.rid}/${args.acuid}`;

  const { countEnded, remainingTime, setFutureTimestamp } = useCountdownTimer(
    new Date()
  );

  const {
    mutate: resendCode,
    isLoading: resending,
    reset: resetResend,
  } = useMutation({
    mutationFn: createFetcher({
      url: url2,
      method: "POST",
    }),

    mutationKey: [endpoints.verifyEmail, args],

    onError: (error) => {
      resetResend();

      console.log("error: ", error);
    },

    onSuccess: (data) => {
      // console.log("data: ", data);

      setArgs({
        acuid: data.acuid,
        rid: data.rid,
      });

      setOtp("");

      setFutureTimestamp(Date.now() + 30000 * (resendCount + 1));
      setResendCount((p) => p + 1);
    },
  });

  const { mutate, isLoading, reset } = useMutation({
    mutationFn: createFetcher({
      url,
      method: "POST",
    }),

    mutationKey: [endpoints.verifyEmailComplete, otp],

    onError: (error) => {
      reset();

      console.log("error: ", error);
    },

    onSuccess: (data) => {
      // console.log("data: ", data);

      navigate("/login");
    },
  });

  function handleProceed() {
    mutate();
  }

  function handleResendClick() {
    resendCode();
  }

  const resendDisabled = isLoading || resending || !countEnded;

  return (
    <div className="   w-max  flex flex-col  justify-start items-center md:items-start  ">
      <div className="w-full pt-4   ">
        <OTPField otp={otp} setOtp={setOtp} />
      </div>

      <section className="mt-8 w-full flex flex-row space-x-4 items-right justify-right  mb-4 text-sm text-accent">
        {!resendDisabled && (
          <button
            type="button"
            role="button"
            onClick={handleResendClick}
            disabled={resendDisabled}
            className="w-full disabled:opacity-50 hover:cursor-pointer  hover:text-primary space-x-1 text-right  "
          >
            <span className=" px-1 whitespace-nowrap inline-block text-center">
              Resend Code
            </span>
          </button>
        )}
        {resendDisabled && (
          <span className=" opacity-60 font-medium text-right text-[#00000042]">
            Resend in {remainingTime.minutesStr}:{remainingTime.secondsStr + ""}
          </span>
        )}
      </section>

      <div className=" mt-8 w-full">
        <button
          type="button"
          role="button"
          onClick={handleProceed}
          disabled={!otpValid}
          className={
            " btn-1   w-full " +
            cn({
              " pointer-events-none w-max ": false,
            })
          }
        >
          {isLoading ? <Loader inverted /> : "Confirm"}
        </button>
      </div>
    </div>
  );
}

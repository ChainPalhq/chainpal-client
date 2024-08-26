import OTPInput from "react-otp-input";

export default function OTPField({ otp, setOtp, numInputs = 6 }) {
  return (
    <div className="w-full  ">
      <OTPInput
        value={otp}
        placeholder=""
        onChange={setOtp}
        numInputs={numInputs}
        renderInput={OTPFragment}
        shouldAutoFocus
        containerStyle="flex flex-row justify-between items-center w-full space-x-4"
      />
    </div>
  );
}

function OTPFragment(props) {
  return (
    <input
      {...props}
      inputMode="numeric"
      autoFocus="true"
      className=" min-w-[40px]   py-1 bg-transparent px-1 lg:min-w-[60px] min-h-[40px] lg:min-h-[60px]  inline-block   text-accent  border rounded border-[#00000042] outline-none focus:text-primary font-medium  select-none  text-base md:text-lg text-center "
    />
  );
}

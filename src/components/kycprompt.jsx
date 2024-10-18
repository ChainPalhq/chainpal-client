import BlurOverlay from "./bluroverlay";

export default function KYCPrompt() {
  return (
    <>
      <BlurOverlay />

      <div className="rounded bg-white center fixed top-1/2 left-1/2 z-20 shadow-xl shadow-black/20 -translate-y-1/2 -translate-x-1/2 p-6 w-full max-w-md min-h-[30vh] space-y-4 border">
        <h1 className="text-xl text-primary font-bold">Welcome</h1>

        <p className="text-[#000000CC] text-sm text-center">
          To begin accepting payments on ChainPal, you are required to complete
          your KYC verification. This step is necessary to ensure compliance
          with regulatory standards and to provide you with a secure and
          seamless payment experience.
        </p>

        <button className="btn-1 w-[50%] px-6 py-2 text-sm ">
          Get Verified
        </button>

        <p className="text-[#000000CC] text-sm text-center cursor-pointer">
          Skip for later?
        </p>
      </div>
    </>
  );
}

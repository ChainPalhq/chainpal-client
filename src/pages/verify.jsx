import Logo from "../assets/images/logo1.png";
import HeroSection from "../components/herosection";
import OTPForm from "../components/otpform";

export default function Verify() {
  return (
    <div className="w-full min-h-screen ">
      <main className="w-full grid grid-cols-1 lg:grid-cols-2">
        <HeroSection title="For Freelancers!" />

        <div className="bg-neutral h-screen  flex flex-col justify-start  items-center">
          <div className="w-[80%] pt-16 space-y-4 ">
            <img src={Logo} alt="logo" className=" " />
            <div className="lg:pl-[4vw] flex flex-col space-y-4 ">
              <h1 className="text-2xl lg:text-3xl text-contrast font-bold">
                {" "}
                Verify Phone number
              </h1>

              <p className="text-base text-black ">
                {" "}
                Code sent to <span> +2348105198013 </span>{" "}
              </p>

              <OTPForm acuid="" rid="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

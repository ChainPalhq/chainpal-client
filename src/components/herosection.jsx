import Ellipse from "../assets/images/ellipse.png";

export default function HeroSection({ title = "For Businesses!" }) {
  return (
    <div className="bg-primary hidden lg:flex   h-screen  pt-16  flex-col justify-start items-center space-y-16">
      <p className="font-bold text-xl lg:text-2xl text-white ">{title}</p>

      <img src={Ellipse} alt="ellipse" className="w-32 h-32  lg:h-96 lg:w-96" />

      <div className="center">
        <p className="font-bold text-xl lg:text-2xl text-white ">
          Global transactions made easy
        </p>

        <p className=" text-xs lg:text-sm text-white ">
          Securely accept payments for your Business global within seconds
        </p>
      </div>
    </div>
  );
}

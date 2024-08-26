import Logo from "../assets/images/logo1.png";
import GoogleIcon from "../assets/icons/google.png";
import { Form, Formik, Field } from "formik";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import BrandedField from "../components/forms/brandedfield";
import { Link } from "wouter";
import * as Yup from "yup";
import HeroSection from "../components/herosection";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(32, "Too Long!")
    .required("Required"),
});

export default function SignIn() {
  return (
    <div className="w-full min-h-screen ">
      <main className="w-full grid grid-cols-1 lg:grid-cols-2">
        <HeroSection title="For Businesses!" />

        <div className="bg-neutral h-screen  flex flex-col justify-start  items-center">
          <div className="w-[80%] pt-16 space-y-8 ">
            <img src={Logo} alt="logo" className=" " />
            <div className="lg:pl-[4vw] flex flex-col ">
              <h1 className="text-2xl lg:text-3xl text-contrast font-bold">
                {" "}
                Welcome Back, Champ
              </h1>

              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  rememberMe: false,
                }}
                validationSchema={SignInSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ isValid }) => {
                  return (
                    <Form className="max-w-lg space-y-6">
                      <legend className="text-contrast text-sm">
                        Log in to access your account
                      </legend>

                      <BrandedField
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        icon={PiEnvelopeSimpleThin}
                      />

                      <BrandedField
                        name="password"
                        type="password"
                        placeholder="Input your password"
                        icon={CiLock}
                      />

                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-start items-start space-x-2">
                          <Field
                            name="rememberMe"
                            type="checkbox"
                            id="rememberMe"
                            className="w-4 h-4 self-center"
                          />

                          <label
                            htmlFor="rememberMe"
                            className="text-base text-secondary  select-none  "
                          >
                            Remember me
                          </label>
                        </div>

                        <Link
                          href="/forgot-password"
                          className="text-accent font-medium hover:text-primary"
                        >
                          Forgot Password?
                        </Link>
                      </div>

                      <div className="pt-4">
                        <button
                          disabled={!isValid}
                          type="submit"
                          className="btn-1"
                        >
                          Sign In
                        </button>
                      </div>

                      <p className="text-secondary w-full text-center">
                        Don't have an account?{" "}
                        <Link
                          href="/sign-up"
                          className="text-accent hover:text-primary"
                        >
                          Create an account
                        </Link>
                      </p>

                      <div className="flex flex-row justify-center items-center space-x-4">
                        <div className="border-t h-[1px] border-[#00000042] w-full"></div>
                        <span className="inline-block whitespace-nowrap text-secondary">
                          {" "}
                          or continue with SSO{" "}
                        </span>

                        <div className="border-t h-[1px] border-[#00000042] w-full"></div>
                      </div>

                      <button className="flex flex-row justify-center items-center space-x-2 px-16  py-3 rounded-md  w-max mx-auto border border-secondary hover:bg-accent/10">
                        <img
                          src={GoogleIcon}
                          alt="google"
                          className="w-6 h-6"
                        />
                        <span className="text-contrast font-medium">
                          Google
                        </span>
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

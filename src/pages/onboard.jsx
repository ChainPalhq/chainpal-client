import Logo from "../assets/images/logo1.png";
import { Form, Formik } from "formik";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import BrandedField from "../components/forms/brandedfield";
import * as Yup from "yup";
import HeroSection from "../components/herosection";

const onboardSchema = Yup.object().shape({});

export default function Onboard() {
  return (
    <div className="w-full min-h-screen ">
      <main className="w-full grid grid-cols-1 lg:grid-cols-2">
        <HeroSection title="For Freelancers!" />

        <div className="bg-neutral h-screen  flex flex-col justify-start  items-center">
          <div className="w-[90%] pt-16 space-y-4 ">
            <img src={Logo} alt="logo" className=" " />
            <div className="lg:pl-[4vw] flex flex-col space-y-4 ">
              <h1 className="text-2xl lg:text-3xl text-contrast font-bold">
                {" "}
                Verify Phone number
              </h1>

              <Formik
                initialValues={{
                  country: "",
                  firstName: "",
                  lastName: "",
                  phoneNumber: "",
                }}
                validationSchema={onboardSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ isValid }) => {
                  return (
                    <Form className="max-w-lg space-y-6">
                      <BrandedField
                        name="country"
                        type="text"
                        placeholder="Country"
                        icon={CiFlag1}
                      />

                      <BrandedField
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        icon={CiUser}
                      />

                      <BrandedField
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        icon={CiUser}
                      />

                      <BrandedField
                        name="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                        icon={CiMobile1}
                      />

                      <p className="text-secondary w-full text-center">
                        By continuing, you confirm that you are authorized to
                        use this phone number and agree to receive text
                        messages. Carrier fees may apply.
                      </p>

                      <div className="pt-4">
                        <button
                          disabled={!isValid}
                          type="submit"
                          className="btn-1"
                        >
                          Next
                        </button>
                      </div>
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

import Logo from "../assets/images/logo1.png";
import { Form, Formik } from "formik";
import { CiUser } from "react-icons/ci";
import BrandedField from "../components/forms/brandedfield";
import * as Yup from "yup";
import HeroSection from "../components/herosection";
import { parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const onboardSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "Too short")
    .max(50, "Too long"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Too short")
    .max(50, "Too long"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .test("valid-number", "Invalid phone number", (value) => {
      if (!value) return false;
      const phoneNumber = parsePhoneNumber(value);
      return phoneNumber ? phoneNumber.isValid() : false;
    }),
});

export default function Onboard() {
  return (
    <div className="w-full min-h-screen ">
      <main className="w-full grid grid-cols-1 lg:grid-cols-2">
        <HeroSection title="For Freelancers!" />

        <div className="bg-neutral h-screen  flex flex-col justify-start  items-center">
          <div className="w-[80%] pt-16 space-y-4 ">
            <img src={Logo} alt="logo" className=" " />
            <div className="lg:pl-[4vw] flex flex-col space-y-4 ">
              <h1 className="text-2xl lg:text-3xl text-contrast font-bold">
                Personal Info
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
                {({ isValid, values, setFieldValue }) => {
                  return (
                    <Form className="max-w-lg space-y-6">
                      {/* <BrandedField
                        name="country"
                        type="text"
                        placeholder="Country"
                        icon={CiFlag1}
                      /> */}

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

                      <PhoneInput
                        placeholder="Phone Number"
                        value={values.phoneNumber}
                        onChange={(value) => {
                          setFieldValue("phoneNumber", value);
                        }}
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

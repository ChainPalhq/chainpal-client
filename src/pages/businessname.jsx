import Logo from "../assets/images/logo1.png";
import { Form, Formik } from "formik";
import BrandedField from "../components/forms/brandedfield";
import * as Yup from "yup";
import HeroSection from "../components/herosection";

const onboardSchema = Yup.object().shape({
  businessname: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

export default function BusinessName() {
  return (
    <div className="w-full min-h-screen ">
      <main className="w-full grid grid-cols-1 lg:grid-cols-2">
        <HeroSection title="For Freelancers!" />

        <div className="bg-neutral h-screen  flex flex-col justify-start  items-center">
          <div className="w-[80%] pt-16 space-y-4 ">
            <img src={Logo} alt="logo" className=" " />
            <div className="lg:pl-[4vw] flex flex-col space-y-4 ">
              <h1 className="text-2xl lg:text-3xl text-contrast font-bold">
                Business Name
              </h1>

              <Formik
                initialValues={{
                  businessname: "",
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
                        name="businessname"
                        type="text"
                        placeholder="Business Name"
                      />

                      <div className="pt-16">
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

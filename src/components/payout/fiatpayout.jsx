import { Form, Formik } from "formik";
import BrandedField from "../forms/brandedfield";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaNairaSign } from "react-icons/fa6";

export default function FiatPayout({ hideMe }) {
  return (
    <div className="w-full">
      <Formik initialValues={{}}>
        {({ isValid }) => {
          return (
            <Form className="space-y-8 w-full">
              <div className="max-w-[437px]">
                <label className="text-sm text-[#6D7D93]">
                  Select Currency
                </label>
                <BrandedField
                  name="currency"
                  type="text"
                  placeholder=""
                  icon={() => <span className="inline-block mr-4">NGN</span>}
                />
              </div>
              <div className="max-w-[437px]">
                <label className="text-sm text-[#6D7D93]">Enter amount</label>
                <BrandedField
                  name="inputAmount"
                  type="text"
                  placeholder=""
                  icon={FaNairaSign}
                />
              </div>

              <div className="max-w-[437px]">
                <label className="text-sm text-[#6D7D93] flex flex-row justify-start items-center space-x-1">
                  <span>You will receive </span>

                  <BsFillInfoCircleFill className="text-xs items-center " />
                </label>
                <BrandedField
                  name="outputAmount"
                  type="text"
                  placeholder=""
                  icon={FaNairaSign}
                />
              </div>

              <div className="max-w-[437px]">
                <label className="text-sm text-[#6D7D93]">
                  Select Bank Account
                </label>
                <BrandedField
                  name="bankAccount"
                  type="text"
                  placeholder=""
                  icon={() => (
                    <span className="inline-block mr-4">
                      UNITED BANK OF AMERICA
                    </span>
                  )}
                />
              </div>

              <div className="flex flex-row justify-end items-center space-x-8">
                <button onClick={hideMe} className="px-4 py-2 text-[#6D7D93]">
                  {" "}
                  Cancel
                </button>

                <button type="submit" className="btn-1 py-2 w-max px-8">
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

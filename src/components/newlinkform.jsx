import BlurOverlay from "./bluroverlay";
import { Formik, Form, Field } from "formik";
import { FaNairaSign } from "react-icons/fa6";
import BrandedField from "./forms/brandedfield";
import { FiPlus } from "react-icons/fi";

export default function NewLinkForm({ hideMe }) {
  return (
    <>
      <BlurOverlay />

      <div className="rounded bg-white flex flex-col justify-start items-center fixed top-1/2 left-1/2 z-20 shadow-xl shadow-black/20 -translate-y-1/2 -translate-x-1/2 p-6 w-full max-w-lg min-h-[30vh] space-y-4 border max-h-[80vh] overflow-y-scroll custom-scrollbar">
        <div className="space-y-1 center">
          <h1 className="text-2xl text-primary font-bold">New Payment Link</h1>
        </div>

        {/* view  */}

        <div className="w-full">
          <Formik initialValues={{}}>
            {({ isValid }) => {
              return (
                <Form className="space-y-4 w-full">
                  <div className="max-w-[437px] relative space-y-1">
                    <label className="text-sm text-[#6D7D93]">Title</label>
                    <BrandedField
                      name="title"
                      type="text"
                      placeholder="Add a page title"
                      extraClasses="py-2"
                    />
                  </div>

                  <div className="max-w-[437px] relative space-y-1">
                    <label className="text-sm text-[#6D7D93]">
                      Description
                    </label>
                    <BrandedField
                      name="description"
                      type="text"
                      placeholder="Add a description/instruction to your payment link"
                      as="textarea"
                      extraClasses="resize-none"
                    />
                  </div>

                  <div className="max-w-[437px] relative space-y-1">
                    <label className="text-sm text-[#6D7D93] flex flex-col">
                      <span>SEO Image (Optional)</span>
                      <span className="text-xs text-[#BDC1C6]">
                        This image will appear when the page is shared on social
                        media. For optimal display, we recommend using a JPG or
                        PNG with dimensions of 1024 x 512 pixels and a file size
                        under 1 MB.
                      </span>
                    </label>
                    <div className="cursor-pointer form-field-primary  flex flex-row justify-center items-center space-x-2 border-dashed text-[#BDC1C6] hover:text-[#727578]">
                      <FiPlus />
                      <span> Choose File</span>
                    </div>
                  </div>

                  <div className="max-w-[437px] relative space-y-1">
                    <div className="flex flex-row w-max justify-start items-center space-x-2">
                      <Field
                        name="isFixedPayment"
                        type="checkbox"
                        extraClasses="self-center"
                        id="isFixedPayment"
                      />
                      <label
                        htmlFor="isFixedPayment"
                        className="text-sm text-[#6D7D93] self-center whitespace-nowrap"
                      >
                        Fixed Payment
                      </label>
                    </div>

                    <BrandedField
                      name="amount"
                      type="text"
                      icon={FaNairaSign}
                    />
                  </div>

                  <div className="max-w-[437px] relative space-y-1">
                    <label className="text-sm text-[#6D7D93]">Custom URL</label>

                    <div className="flex flex-row justify-start items-center">
                      <span className="inline-block self-stretch bg-primary text-white  font-bold p-2 rounded-l-[5px]  z-10 ">
                        pay.chainpal.xyz/
                      </span>
                      <BrandedField
                        name="customURL"
                        type="text"
                        extraClasses="py-2 -translate-x-1"
                      />
                    </div>
                  </div>

                  <div className="max-w-[437px] relative space-y-1">
                    <label className="text-sm text-[#6D7D93]">
                      Send Notifications To
                    </label>
                    <BrandedField
                      name="notificationsEmail"
                      type="email"
                      extraClasses="py-2"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="max-w-[437px] relative space-y-1">
                    <label className="text-sm text-[#6D7D93]">
                      Redirect after payment (Optional)
                    </label>
                    <BrandedField
                      name="redirectUrl"
                      type=""
                      placeholder="Enter redirect URL"
                      extraClasses="py-2"
                    />
                  </div>

                  <div className="flex flex-row justify-end items-center space-x-8 pt-4">
                    <button
                      onClick={hideMe}
                      className="px-4 py-2 text-[#6D7D93]"
                    >
                      {" "}
                      Cancel
                    </button>

                    <button
                      disabled={isValid}
                      type="submit"
                      className="btn-1 py-2 w-max px-8"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

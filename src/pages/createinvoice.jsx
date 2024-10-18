import Sidebar from "../components/sidebar";
import { useState } from "react";
import cn from "classnames";
import SubHeader from "../components/subheader";
import { Form, Formik } from "formik";
import CustomerDetails from "../components/invoice/customerdetails";
import InvoiceBreakdown from "../components/invoice/invoicebreakdown";

export default function CreateInvoice() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full min-h-screen ">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={
          "  bg-white  min-h-screen pt-8 space-y-8 pb-16 " +
          cn(
            collapsed && " ml-[60px] ",
            !collapsed && "  md:ml-[20%] lg:ml-[20%] xl:ml-[15%] "
          )
        }
      >
        {/* l1 */}

        <SubHeader
          title="Invoice"
          crumbs={[
            {
              name: "New",
            },
          ]}
        />

        <Formik initialValues={{ discountAs: "Percentage" }}>
          {({ values, setFieldValue }) => {
            const discountAsList = [
              {
                name: "Percentage",
                value: "Percentage",
              },
              {
                name: "Currency",
                values: "Currency",
              },
            ];

            return (
              <Form>
                <div className=" px-6 flex flex-row space-x-2 justify-between items-stretch">
                  <InvoiceBreakdown />

                  {/* custom details  */}

                  <CustomerDetails
                    values={values}
                    setFieldValue={setFieldValue}
                    discountAsList={discountAsList}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

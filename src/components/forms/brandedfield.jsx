import { useState } from "react";
import cn from "classnames";
import { Field, ErrorMessage } from "formik";

export default function BrandedField({
  placeholder,
  name,
  type,
  image,
  icon: Icon,
  addOn: AddOn,
  label,
  as = "input",
  required = false,
  LabelRender = null,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  function focus() {
    setFocused(true);
  }

  function blur() {
    setFocused(false);
  }

  return (
    <div className="space-y-2  text-foreground w-full">
      {LabelRender ? (
        <LabelRender htmlFor={name}>
          {" "}
          {label}
          {required && <span className="inline-block "> * </span>}
        </LabelRender>
      ) : (
        <label
          htmlFor={name}
          className="basic-text font-semibold block capitalize text-foreground "
        >
          {label} {required && <span className="inline-block "> * </span>}
        </label>
      )}

      <div className=" relative group ">
        {image && !Icon && (
          <div className="absolute left-6 top-[30%] ">
            <img src={image} width="20" height="20" alt="first name" />
          </div>
        )}

        {AddOn && (
          <div className="absolute  top-1/2 h-min -translate-y-1/2 right-2   ">
            <AddOn />
          </div>
        )}

        {Icon && (
          <div className="absolute left-4 top-[30%]  ">
            <Icon
              className={
                " text-xl   " +
                cn({
                  " text-primary ": focused,
                  " text-[#0000004D] ": !focused,
                })
              }
            />
          </div>
        )}

        <Field
          {...props}
          id={name}
          onFocus={focus}
          onBlur={blur}
          name={name}
          type={type}
          as={as}
          className={
            " form-field-primary " +
            cn({
              " pl-4 ": !(Icon || image),
            })
          }
          placeholder={placeholder}
        />

        <p className="absolute  left-0  w-full pt-1 text-xs text-left  text-red-500">
          <ErrorMessage as="p" name={name} />
        </p>
      </div>
    </div>
  );
}

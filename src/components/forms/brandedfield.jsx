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
  iconPadding = false,
  extraClasses = "",
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
    <div className="space-y-0   text-[#6D7D93] w-full">
      {LabelRender ? (
        <LabelRender htmlFor={name}>
          {" "}
          {label}
          {required && <span className="inline-block "> * </span>}
        </LabelRender>
      ) : (
        <label
          htmlFor={name}
          className="basic-text font-semibold block capitalize text-[#6D7D93] "
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
          <div className="absolute left-4  top-1/2 -translate-y-1/2  ">
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
            extraClasses +
            cn({
              " pl-4 ": !(Icon || image),
              " pl-16 ": (Icon || image) && iconPadding,
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

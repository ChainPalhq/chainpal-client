import cn from "classnames";
import { NumericFormat } from "react-number-format";

export default function NumberFormattingField({
  placeholder,
  name,
  type,
  value,
  icon: Icon,
  rightIcon: RightIcon,
  addOn: AddOn,
  readOnly = false,
  disabled = false,
  required = false,
  onChange = null,
  extraClasses = "",
  inputMode = "text",
  iconPadding = false,
}) {
  return (
    <div className=" relative group  ">
      {Icon && (
        <div className="absolute top-[50%] left-4  translate-y-[-50%]  ">
          <Icon className={" text-xl  text-[#6D7D93] "} />
        </div>
      )}
      {RightIcon && (
        <div className="absolute top-[50%] right-2  translate-y-[-50%]   ">
          <RightIcon className={" text-xl   "} />
        </div>
      )}

      <NumericFormat
        allowNegative={false}
        // allowedDecimalSeparators={allowDecimalSeparators}

        displayType="input"
        thousandSeparator=","
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        inputMode={inputMode}
        autoFocus={false}
        className={
          "form-field-primary " +
          extraClasses +
          cn({
            " pl-4 ": !Icon,
            " pl-12  ": Icon,
            " pl-16 ": Icon && iconPadding,
          })
        }
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onValueChange={(values) => {
          if ("function" === typeof onChange) {
            onChange(values.value);
          }
        }}
      />
    </div>
  );
}

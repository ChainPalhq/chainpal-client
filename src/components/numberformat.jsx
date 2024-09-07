import { NumericFormat } from "react-number-format";

function NumberFormat({
  value,
  prefix = "₦ ",
  suffix = "",
  hasPrefix = true,
  hasSuffix = false,
  displayType = "text",
  toFixed = 0,
  thousandSeparator = true,
}) {
  return (
    <NumericFormat
      value={value.toFixed(toFixed)}
      displayType={displayType}
      thousandSeparator={thousandSeparator}
      prefix={hasPrefix ? prefix : ""}
      suffix={hasSuffix ? suffix : ""}
      decimalSeparator="."
      decimalScale={8}
    />
  );
}

export default NumberFormat;

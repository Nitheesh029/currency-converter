import { useId } from "react";

const InputBox = ({
  label,
  currencyOptions = [
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "AUD",
    "CAD",
    "CHF",
    "CNY",
    "INR",
  ],
  onCurrencyChange,
  amount,
  onAmountChange,
  selectedCurrency,
  amountDisabled = false,
  currencyDisable = false,
}) => {
  const inputID = useId();
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <div className="flex justify-between mb-2">
        <label className="text-sm text-gray-500" htmlFor={inputID}>
          {label}
        </label>
        <label className="text-sm text-gray-500">Currency Type</label>
      </div>
      <div className="flex space-x-2">
        <div className="w-full">
          <input
            type="number"
            id={inputID}
            placeholder="Amount"
            className="w-full bg-gray-100 py-3 px-4 rounded-lg text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={amountDisabled}
          />
        </div>
        <select
          className="bg-gray-100 py-3 px-4 rounded-lg text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;

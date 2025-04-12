import React, { useState } from "react";
import InputBox from "./components/InputBox";
import currencyBg from "./assets/currency.jpg";
import useCurrency from "./hooks/useCurrency";
const App = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);
  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-gray-100 bg-center"
      style={{
        backgroundImage: `url(${currencyBg})`,
        objectFit: "cover",
        backgroundSize: "100%",
      }}
    >
      <div className="max-w-md w-full bg-white/10 border-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg relative">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">
          Currency Converter
        </h1>

        <div className="space-y-4">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setFrom(currency);
            }}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
            currencyDisable={false}
          />

          <div className="flex justify-center">
            <button
              className="bg-blue-100 hover:bg-blue-200 py-2 px-8 text-slate-950 font-semibold text-lg flex items-center gap-2 rounded-md absolute top-[183px]"
              onClick={swap}
            >
              Swap<i className="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>

          <InputBox
            label="To"
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setTo(currency);
            }}
            selectedCurrency={to}
            amountDisable
            amount={convertedAmount}
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg mt-4 transition duration-200"
            onClick={convert}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
      <div className="fixed w-full bottom-0 bg-gradient-to-r from-blue-700 to-blue-500 py-4 text-center text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-2 md:mb-0">
              <span className="font-semibold">Currency Converter</span> &copy;{" "}
              {new Date().getFullYear()}
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Contact
              </a>
            </div>
            <div className="mt-2 md:mt-0">
              Created by <span className="font-bold">Nitheesh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import { useState } from 'react'
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => setConvertedAmount(amount * currencyInfo[to])


  return (
    <div className="bg-black bg-cover bg-center bg-no-repeat h-screen w-full flex justify-center items-center" >
      <div className="flex flex-col md:flex-row w-full h-screen ">
        <div className='hidden md:block md:w-1/2 h-full'>
          <img
            className='w-full h-full object-cover'
            src='https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg' />

        </div>
        <div
          className="w-full md:w-1/2 h-full flex justify-center items-center 
          bg-[url('https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg')]
    bg-cover bg-center md:bg-none"
        >
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => { e.preventDefault(); convert() }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label='From'
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  onClick={swap}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label='To'
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisable
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
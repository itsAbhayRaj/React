import React,{useId} from 'react'

function InputBox({
  label="Amount",
  amount=0,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectedCurrency="usd",
  amountDisabled=false,
  currencyDisabled=false,
  classname=""
}) {
    const amountInputId = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
             <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    min={0}
                    step="any"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    disabled={currencyDisabled}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency)=>
                    <option key={currency} value={currency}> {/** performance enhancement using key in a loop */}
                        {currency}
                    </option>
                    )}
                
                </select> 
            </div> 
        </div>
  )
}

export default InputBox;
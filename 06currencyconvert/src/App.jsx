import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import {InputBox} from './components/Index.js'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from); 
  const options = Object.keys(currencyInfo)
  console.log(options);
  

  const swap = () => {
    setFrom(to);
    setTo(from); 
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    const converted = amount * currencyInfo[to];
    setConvertedAmount(parseFloat(converted.toFixed(2)));

  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/730647/pexels-photo-730647.jpeg)`, backgroundSize: '1562px 870px'}}>

    <div className='w-full'>

      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>

        <form onSubmit={(e) => {
          e.preventDefault()
          convert() //convert function mentioned at top of form under onSubmit function
        }}>
          <div className='w-full mb-1'>
            <InputBox 
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}/>
          </div>
          <div className='relative w-full h-0.5'>
            <button 
            className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-amber-600 text-white px-2 py-0.5'
            onClick={swap}>↑ ↓</button>
          </div>
          <div className='w-full mb-1'>
            <InputBox 
            label="To"
            amount={convertedAmount} //read only input field
            amountDisabled={true}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}/>
          </div>
          <button className='w-full bg-amber-600 text-white px-4 py-3 rounded-lg'type='submit'>
             Convert {from} to {to} </button>
        </form>
      </div>
    </div>
   
    </div>
  )
}

export default App

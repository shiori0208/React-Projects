import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import {InputBox} from './components/Index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

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
    setConvertedAmount(amount * currencyInfo[to]); 
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/730647/pexels-photo-730647.jpeg)`, backgroundSize: '1562px 870px'}}>

    <div className='w-full'>

      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>

        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
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
        </form>
      </div>
    </div>
   
    </div>
  )
}

export default App

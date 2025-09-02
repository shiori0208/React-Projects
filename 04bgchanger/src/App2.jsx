import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import summerImg from './images/summer.jpg'
import monsoonImg from './images/monsoon.jpg'
import autumnImg from './images/autumn.jpg'
import winterImg from './images/winter.jpg'
import springImg from './images/spring.jpg'


function App2() {
  const [bg, setBg] = useState({
    color: 'black',
    image: ''
  });

  // Example image URLs (replace with your own images)

  return (
    <div
      className='w-full h-screen duration-200'
      style={{
        backgroundColor: bg.color,
        backgroundImage: bg.image ? `url(${bg.image})` : 'none',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-300 px-3 py-2 rounded-3xl'>
          <button
            onClick={() => setBg({ color: '#F7DC9F', image: summerImg })}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-500 text-black'
          >
            Summer
          </button>
          <button
            onClick={() => setBg({ color: '#4C9DB0', image: monsoonImg })}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-800 text-white'
          >
            Monsoon
          </button>
          <button
            onClick={() => setBg({ color: 'orange', image: autumnImg })}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-amber-600 text-black'
          >
            Autumn
          </button>
          <button
            onClick={() => setBg({ color: '#BDD7DE', image: winterImg })}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-300 text-black'
          >
            Winter
          </button>
          <button
            onClick={() => setBg({ color: 'pink', image: springImg })}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-pink-300 text-black'
          >
            Spring
          </button>
        </div>
      </div>
    </div>
  )
}

export default App2; 
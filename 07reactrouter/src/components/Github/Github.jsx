import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

  const [data, setData] = React.useState([])
  useEffect( () => {
    fetch('https://api.github.com/users/shiori0208')
    .then((response) => response.json())
    .then(data=> {
      console.log(data)
      setData(data)
    })
  }, [])

  return (
    <div className='flex flex-col items-center text-center m-4 bg-amber-500 text-white p-4 text-3xl'>
      <img className='mx-auto' src={data.avatar_url} width={300} alt="" />
      Github Followers: {data.followers}
    </div>
  )

}

export default Github
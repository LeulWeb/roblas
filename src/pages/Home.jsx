import React from 'react'
import hero from '../assets/hero.jpg'
import './home.css'

const Home = () => {
  return (
    <div>
        <div className='banner relative h-screen bg-cover bg-center'>
        <div className='absolute top-0 z-0  w-full h-full overflow-hidden bg-black opacity-60'>
        </div>
    </div>


    <div className='absolute top-0 z-40  h-screen w-screen container  ' id='home'>
       <div className='flex  items-center justify-start w-10/12 mx-auto h-full'>
            <div>
            <h1 className='text-white text-3xl'>Roblas Supply chain mangament</h1>
            <p className='text-white text-lg w-96 text-justify  my-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, totam facere asperiores saepe sapiente qui molestiae quasi hic tenetur! Voluptates dignissimos saepe deleniti architecto quam laboriosam ipsam enim quis dolor.
            </p>
            </div>
       </div>
    </div>
    </div>
  )
}

export default Home
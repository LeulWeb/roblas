import React from 'react'
import tiles from '../assets/tiles.jpg'
import car from '../assets/car.jpg'
import bathroom from '../assets/bathroom.jpg'
import bajaj from '../assets/bajaj.jpg'
import agriculture from '../assets/agriculture.jpg'
import building from '../assets/building.jpg'
import cloth from '../assets/cloth.jpg'
import food from '../assets/food.jpg'
import spare from '../assets/spare.jpg'
import industry from '../assets/industry.jpg'
import toy from '../assets/toy.jpg'


const Products = () => {
  return (
    <div className=' h-screen w-screen'>
{/*        
        <svg  className='absolute top-[60vh]  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L30,112C60,128,120,160,180,197.3C240,235,300,277,360,266.7C420,256,480,192,540,186.7C600,181,660,235,720,250.7C780,267,840,245,900,229.3C960,213,1020,203,1080,186.7C1140,171,1200,149,1260,122.7C1320,96,1380,64,1410,48L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>  */}
       <svg id="product" className='hidden lg:block absolute top-[50vh]' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"  viewBox="0 0 2400 800"><g fill="#fff" transform="matrix(1,0,0,1,9.109130859375,347.0950164794922)"><path d="M-10,10C37.53787878787879,17.5,125.18939393939395,49.541666666666664,218.1818181818182,46C311.17424242424244,42.458333333333336,345.4545454545455,-10.75,436.3636363636364,-7C527.2727272727273,-3.25,563.6363636363636,72.33333333333333,654.5454545454545,64C745.4545454545454,55.666666666666664,781.8181818181818,-46.166666666666664,872.7272727272727,-47C963.6363636363637,-47.833333333333336,1000.0000000000001,63.541666666666664,1090.909090909091,60C1181.818181818182,56.458333333333336,1218.181818181818,-58.791666666666664,1309.090909090909,-64C1400,-69.20833333333333,1436.3636363636363,34.375,1527.2727272727273,35C1618.1818181818182,35.625,1654.5454545454545,-61.208333333333336,1745.4545454545455,-61C1836.3636363636365,-60.791666666666664,1872.7272727272727,27.458333333333336,1963.6363636363637,36C2054.5454545454545,44.541666666666664,2090.909090909091,-23.333333333333332,2181.818181818182,-20C2272.727272727273,-16.666666666666668,2302.462121212121,-35.5,2400,52C2497.537878787879,139.5,3254.1666666666665,223.33333333333331,2650,400C2045.8333333333335,576.6666666666667,156.25,795.8333333333334,-500,900" transform="matrix(1,0,0,1,0,35)" opacity="NaN"></path></g></svg>


        <div className='relative w-10/12  mx-auto' >
            <p className=' font-bold text-3xl mb-3'>Products</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident aperiam similique temporibus vitae? Blanditiis nam rerum laborum impedit necessitatibus porro, distinctio laudantium dolores iusto id tempora, magni voluptates veniam.</p>

            <div className='grid grid-cols-2 md:grid-cols-6 gap-3'>
                <div className='bg-red-500 row-span-2 rounded-md shadow-md'>
                    <img src={tiles} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='bg-green-500  rounded-md shadow-md'>
                    <img src={bathroom} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='bg-red-500  rounded-md shadow-md'>
                <img src={car} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='bg-blue-500  rounded-md shadow-md'>
                <img src={bajaj} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='bg-red-500  rounded-md shadow-md'>
                    <img src={building} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='bg-pink-500  rounded-md shadow-md'>
                <img src={agriculture} alt="" className='w-full h-full object-cover' />

                </div>
                <div className='bg-red-500  rounded-md shadow-md'>
                <img src={spare} alt="" className='w-full h-full object-cover' />
                    
                </div>
                <div className='bg-green-500  rounded-md shadow-md'>
                <img src={food} alt="" className='w-full h-full object-cover' />

                </div>
                <div className='bg-red-500  rounded-md shadow-md'>
                <img src={industry} alt="" className='w-full h-full object-cover' />

                </div>
                <div className='bg-pink-500  rounded-md shadow-md'>
                <img src={cloth} alt="" className='w-full h-full object-cover' />
                <h1>Some sool</h1>

                </div>
                <div className='bg-red-500  rounded-md shadow-md'>
                <img src={toy} alt="" className='w-full h-full object-cover' />
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Products
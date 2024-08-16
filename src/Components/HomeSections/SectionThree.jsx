import React from 'react'
import Image from 'next/image'
import one from '../Images/one.png'
import logo from '../Images/logo.svg'
import two from '../Images/two.png'

const SectionThree = () => {
  return (
    <div className='px-[7rem] mt-20'>
        <hr />
      <div className='grid grid-cols-4'>
        <div className='flex items-center justify-center flex-col'>
            <div className='w-[150px] flex items-center justify-center'>
                <Image src={one} alt='' width={0} height={0}/>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
            <button className='bg-red-200 p-2 text-xs rounded-lg my-2'>Step 1</button>
            <h2 className='font-bold text-sm pb-1'>Filter & Discover</h2>
            <p className='text-xs'>Smart filtering and suggestions <br /> make it easy to find</p>
            </div>
        </div>

        <div className='flex items-center justify-center flex-col'>
            <div className='w-[150px] flex items-center justify-center'>
                <Image src={one} alt='' width={0} height={0}/>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
            <button className='bg-red-200 p-2 text-xs rounded-lg my-2'>Step 1</button>
            <h2 className='font-bold text-sm pb-1'>Filter & Discover</h2>
            <p className='text-xs'>Smart filtering and suggestions <br /> make it easy to find</p>
            </div>
        </div>

        <div className='flex items-center justify-center flex-col'>
            <div className='w-[150px] flex items-center justify-center'>
                <Image src={one} alt='' width={0} height={0}/>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
            <button className='bg-red-200 p-2 text-xs rounded-lg my-2'>Step 1</button>
            <h2 className='font-bold text-sm pb-1'>Filter & Discover</h2>
            <p className='text-xs'>Smart filtering and suggestions <br /> make it easy to find</p>
            </div>
        </div>

        <div className='flex items-center justify-center flex-col'>
            <div className='w-[150px] flex items-center justify-center'>
                <Image src={one} alt='' width={0} height={0}/>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
            <button className='bg-red-200 p-2 text-xs rounded-lg my-2'>Step 1</button>
            <h2 className='font-bold text-sm pb-1'>Filter & Discover</h2>
            <p className='text-xs'>Smart filtering and suggestions <br /> make it easy to find</p>
            </div>
        </div>
      </div>

      <div className='my-40 flex m-auto gap-40 w-full'>
        <div>
            <div>
                <Image className='w-32 mb-10' src={logo} alt='' width={0} height={0}/>
            </div>
            <h2 className='text-5xl font-bold'>Earn free money <br /> with Ciseco</h2>
            <p className='my-10'>With Ciseco you will get freeship & savings combo...</p>
            <div className='flex gap-5'>
                <button className='bg-black text-white rounded-full p-4 font-bold'>Savings combo</button>
                <button className='bg-black text-white rounded-full p-4 font-bold'>Discover more</button>
            </div>
        </div>

        <div>
            <Image className='w-[30rem] ml-auto' src={two} alt='two' width={0} height={0}/>
        </div>
      </div>
    </div>
  )
}

export default SectionThree

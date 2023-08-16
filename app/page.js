import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[url('/bg.png')] min-h-screen w-full bg-no-repeat bg-center bg-cover">
      <header className='flex md:flex-row flex-col items-center justify-between py-10 container mx-auto md:px-0 px-4'>
        <div>
          <Image
            src="/logo.png"
            alt="Komsic"
            width={100}
            height={100}
            priority />
        </div>
        <div className='flex   items-center  space-x-4 md:mt-0 mt-4'>
          <div className='bg-[#260267] rounded-2xl  px-4 py-3 flex items-center space-x-4'>
            <div>
              <Image
                src="/play.svg"
                alt="play"
                className='w-8 h-8'
                width={100}
                height={40}
                priority />
            </div>
            <div>
              <p className='text-white text-[14px] font-medium' >Coming soon</p>
              <h1 className='text-white text-[16px] font-bold'>Play store</h1>
            </div>
          </div>
          <div className='bg-[#260267] rounded-2xl  px-4 py-3 flex items-center space-x-4'>
            <div>
              <Image
                src="/apple.svg"
                alt="apple"
                className='w-8 h-8'
                width={100}
                height={40}
                priority />
            </div>
            <div>
              <p className='text-white md:text-[14px] text-sm font-medium' >Coming soon</p>
              <h1 className='text-white md:text-[16px] text-sm font-bold'>App store</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center text-center">
        <div className='px-4'>
          <h1 className='lg:text-[128px] md:text-[60px] text-[40px] font-semibold not-italic text-white'>Coming Soon</h1>
          <h1 className='md:text-lg text-sm font-medium not-italic text-white text-center'>A video platform and marketplace connecting the universe <br /> of brands and creators.</h1>
          <div className='bg-[#120130] py-2 px-4 rounded-lg max-w-lg mx-auto container mt-11'>
            <div className='flex items-center justify-between'>
            <input type="text" className="bg-transparent md:w-[70%] w-[50%] outline-none text-white text-[16px]" name="" id="" placeholder="Please enter your email address" />
            <button className='bg-[#B139FF] py-3 px-4 rounded-[10px] text-[16px] text-white font-medium'>Notify me</button>
            </div>
          </div>
          <h1 className='md:text-md font-medium not-italic mt-6 text-white text-center'>Notify me when Kosmic is launched.</h1>
        </div>
      </div>
      <div className='flex items-center md:justify-between justify-center md:flex-row flex-col mt-[120px] container mx-auto mb-4'>
        <h1 className='text-white text-center font-montserrat font-semibold text-base tracking-tighter leading-normal letter-spacing-[0.32px]'>Privacy Policy</h1>
        <h1 className='text-white text-center font-montserrat font-normal text-base tracking-tighter leading-normal letter-spacing-[0.32px]'>© Kosmic LLC. All rights reserved.</h1>
      </div>
    </main>
  )
}

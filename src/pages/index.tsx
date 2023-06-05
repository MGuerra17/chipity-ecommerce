import Image from 'next/image'

export default function Home(): JSX.Element {
  return (
    <div className='h-[calc(100vh-7.3rem)] flex flex-col-reverse md:flex-row justify-end'>
      <div className='w-full md:w-1/2 md:h-full grid place-items-center'>
        <div className='relative w-4/5 md:w-4/5 aspect-square mt-8 md:mt-0'>
          <Image
            className='object-contain max-w-2xl'
            src='/home.webp'
            alt='Ilustracion 3D de una chica y un smarthphone'
            fill
            sizes='(max-width: 768px) 100vw,50vw'
            placeholder='blur'
            blurDataURL='data:image/png;base64,L87K_59Er?x,_44mxcyDVqMbtAyF'
          />
        </div>
      </div>
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center flex-col gap-y-8 mt-14 md:mt-0'>
        <h1 className='text-4xl md:text-7xl font-black px-10 md:px-0 text-slate-950 max-w-lg text-center md:text-left md:self-start'>
          ¡Welcome to the best ring <span className='text-primary'>party</span>!
        </h1>
        <p className='text-sm text-center md:text-left md:text-lg max-w-lg px-10 md:px-0 md:self-start'>
          Joyas en acero rodinado. Tagg us{' '}
          <a href='#' target='_blank' className='underline decoration-primary underline-offset-4 font-bold'>
            @chypity
          </a>
        </p>
        <div className='flex gap-x-4'>
          <a
            href='https://wa.me/573024276663'
            target='_blank'
            rel='noreferrer'
            className=' border border-emerald-500 text-emerald-500 py-2 px-3 rounded-full flex items-center hover:text-white hover:bg-emerald-500 transition-all'
          >
            <svg className='w-5 h-5 pr-1' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z'
                fill='currentColor'
              />
            </svg>
            Contactanos
          </a>
          <a
            href='/catalogo'
            className='bg-primary text-white py-2 px-3 rounded-full flex items-center justify-center hover:bg-primary/80 transition-all'
          >
            <svg
              className='fill-white w-5 h-5 mr-1'
              viewBox='0 0 15 15'
              version='1.1'
              id='jewelry-store'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12,8.5c0,2.4853-2.0147,4.5-4.5,4.5S3,10.9853,3,8.5c0-1.8483,1.1164-3.4329,2.7099-4.1255l0.1761,0.137l0.7739,0.6019&#xA;&#x9;C5.1366,5.4922,4,6.8611,4,8.5C4,10.4299,5.5701,12,7.5,12S11,10.4299,11,8.5c0-1.6389-1.1366-3.0078-2.6599-3.3866l0.95-0.7388&#xA;&#x9;C10.8836,5.0672,12,6.6517,12,8.5z M7.5,4.5L10,2.5555L9,1H6L5,2.5555l1.5,1.1667L7.5,4.5z'
              />
            </svg>
            Ver catalogo
          </a>
        </div>
      </div>
    </div>
  )
}

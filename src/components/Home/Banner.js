import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-linear-to-r from-primary/20 to-secondary/20 min-h-[300px] md:min-h-[500px] my-8 rounded-2xl">

  <div className="hero-content flex-col md:flex-row-reverse py-10">


  <div className="flex flex-1 justify-start md:justify-end">
  <Image
    src="/banner.png"
    alt="hero banner"
    width={700}
    height={400}
    className='shadow-xl rounded-xl'
  />
</div>

    
    <div className='max-w-80 md:max-w-full flex-1'>
      <h1 className="text-3xl md:text-6xl font-bold  mt-4 md:mt-0">Find Your Next <span className="text-primary">Read</span></h1>
      <p className="py-6 text-lg md:text-xl text-gray-600">
       Explore a vast collection of books across various categories and start your digital reading journey today.
      </p>

     <Link href={'/all-books'} > <button className="btn btn-lg rounded-full bg-linear-to-r from-violet-500 to-pink-500 text-white transition-all duration-500 hover:from-violet-600 hover:to-purple-700 shadow-xl hover:scale-95 ">Browse Now</button></Link>

    </div>
  </div>
</div>
    );
};

export default Banner;
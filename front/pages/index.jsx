import React from 'react'
import { MdSchool } from 'react-icons/md'
import {useState} from 'react'
import {BsFillMenuButtonWideFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineFeaturedPlayList} from 'react-icons/md'
import {ImPriceTag} from 'react-icons/im'
import {HiOutlineInformationCircle} from 'react-icons/hi'
import Image from 'next/image'

function aboutus() {
  const [first, setfirst] = useState(false)
 function myfunc(){
    if(first==true){
      setfirst(false)
    }
    else{
      setfirst(true)
    }
  }
  return (
    <div>


<div className="bg-teal-800 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header className="flex justify-between items-center py-4 md:py-8">
            {/* logo - start */}
              <div className='lg:hover:scale-125 hover:scale-105 transition-all duration-300 '>
              <MdSchool className="w-6 h-auto text-black scale-150 " />
              Shehzada Nand College
              </div>
            {/* logo - end */}
            {/* nav - start */}
            <nav className="hidden lg:flex gap-12">
              <a href="#" className="text-white hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Home</a>
              <a href="#" className="inline-flex items-center hover:text-black text-black text-lg font-semibold gap-1">
                Features
                
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">About</a>
            </nav>
            {/* nav - end */}
            {/* buttons - start */}
            <div className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
         
            </div>
            <button onClick={myfunc} type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2 ">
            <BsFillMenuButtonWideFill/>
              Menu
            </button>
            {/* buttons - end */}
          </header>
          {/* menu - start */}
          <div className="w-full hidden lg:block bg-gray-50 border rounded-lg shadow-sm overflow-hidden">
            <div className="max-w-screen-lg flex items-center gap-8 p-8 mx-auto">
              <div className="w-2/3 grid grid-cols-2 gap-8">
                {/* link - start */}
                <a href="#" className="group flex gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Growth</div>
                    <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                  </div>
                </a>
                {/* link - end */}
                {/* link - start */}
                <a href="#" className="group flex gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Security</div>
                    <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                  </div>
                </a>
                {/* link - end */}
                {/* link - start */}
                <a href="#" className="group flex gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Cloud</div>
                    <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                  </div>
                </a>
                {/* link - end */}
                {/* link - start */}
                <a href="#" className="group flex gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Analytics</div>
                    <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                  </div>
                </a>
                {/* link - end */}
              </div>
              {/* promo - start */}
              <div className="w-1/3 border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320" loading="lazy" alt="Photo by Fakurian Design" className="w-full h-full object-cover object-center" />
                </div>
                <div className="flex justify-between items-center bg-white gap-2 p-3">
                  <p className="text-gray-500 text-sm">This is some simple filler text.</p>
                  <a href="#" className="inline-block shrink-0 bg-white hover:bg-gray-50 active:bg-gray-100 focus-visible:ring ring-indigo-300 text-indigo-500 text-sm font-semibold border rounded-lg outline-none transition duration-100 px-3 py-1">More</a>
                </div>
              </div>
              {/* promo - end */}
            </div>
          </div>
          {/* menu - end */}
        </div>
      </div>


      <div className={`  w-full flex  justify-around ${first?'h-32 bg-teal-800':'invisible h-1 '} lg:invisible transition-all duration-300  lg:h-2 z-20  border-black pt-4 border-t-2 bg-teal-800`}>
        
        <h1 className='text-xl cursor-pointer'><AiFillHome/> Home</h1>
        <h1 className='text-xl cursor-pointer'> <MdOutlineFeaturedPlayList/>Features</h1>
        <h1 className='text-xl cursor-pointer'><ImPriceTag/> Pricing</h1>
        <h1 className='text-xl cursor-pointer'><HiOutlineInformationCircle/>About</h1>
      </div>



{}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      {/* text - start */}
      <div className="mb-10 md:mb-16">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Blog
        </h2>
        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.
        </p>
      </div>
      {/* text - end */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 lg:flex lg:justify-around">
      
               {/* article - start */}

        <a
          href="#"
          className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
          >
            {/* lyout fill ka mtlb height and width jitni hai utna kro heightp*/}
          <Image
            src="/images/pr.png"
            layout='fill' 
        
            className="w-full h-full  object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />
          <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none" />
          <div className="relative p-4 mt-auto">
            <span className="block text-gray-200 text-sm">March 15, 2021</span>
            <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">
              10 best smartphones for devs
            </h2>
            <span className="text-indigo-300 font-semibold">Read more</span>
          </div>
        </a>
        {/* article - end */}
        {/* article - start */}
        <a
          href="#"
          className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
          >
          <img
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />
          <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none" />
          <div className="relative p-4 mt-auto">
            <span className="block text-gray-200 text-sm">
              January 27, 2021
            </span>
            <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">
              Lorem, ipsum dolor sit hello 
            </h2>
            <span className="text-indigo-300 font-semibold">Read more</span>
          </div>
        </a>
        {/* article - end */}
      </div>
    </div>
  </div>




  

  {/* footer */}
  <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
    <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="flex flex-col items-center border-t pt-6">
        {/* nav - start */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4">
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            Investor Relations
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            Jobs
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            Press
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            Blog
          </a>
        </nav>
        {/* nav - end */}
        {/* social - start */}
        <div className="flex gap-4">
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
          >
            <svg
              className="w-5 h-5"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
          >
            <svg
              className="w-5 h-5"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
          >
            <svg
              className="w-5 h-5"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
          >
            <svg
              className="w-5 h-5"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        {/* social - end */}
      </div>
      <div className="text-gray-400 text-sm text-center py-8">
        © 2021 - Present Flowrift. All rights reserved.
      </div>
    </footer>
  </div>

    </div>
  )  
}

export default aboutus
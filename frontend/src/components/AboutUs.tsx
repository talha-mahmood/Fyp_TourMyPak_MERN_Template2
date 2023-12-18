import React from 'react'
import snowmountain from "../../public/snowmountain.jpg"
const AboutUs = () => {
  return (
    <div >
      {/* <div className='flex flex-col items-start justify-center gap-[24px]'>
      <p className=" text-29xl inline-block text-black w-[469px]">
              Our tour plan is to fulfil your dream wish
     </p>
     <p className=" text-xl leading-[160%] text-grey-1 inline-block w-[442px]">
            Understand to achieve anything requires faith and belief in
            yourself, vision, hard work, determination, and dedication.
    </p>
      </div> */}


<div className=" flex flex-col gap-y-[60px] md:gap-y-0 md:flex-row mt-20 justify-between  max-w-[320px] md:max-w-full">
 
      
        <div className='flex flex-col items-start justify-center gap-[24px]'>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
            <b className="relative tracking-[0.2em] uppercase text-secondarycolor">About us</b>
            <b className="relative text-29xl inline-block text-black md:w-[469px]">
              Our tour plan is to fulfil your dream wish
            </b>
          </div>
          <div className="relative text-xl leading-[160%] text-grey-1 inline-block md:w-[442px]">
            Understand to achieve anything requires faith and belief in
            yourself, vision, hard work, determination, and dedication.
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-[24px] text-21xl">
            <div className="shrink-0 flex flex-col items-start justify-center">
              <b className="relative text-secondarycolor">2</b>
              <div className="relative text-base text-grey-1 inline-block md:w-[100px]">
                Years of Experience
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-center">
              <b className="relative text-secondarycolor">100</b>
              <div className="relative text-base text-grey-1 inline-block md:w-[100px]">
                <p className="m-0 ">Sucessful</p>
                <p className="m-0 ">Trips</p>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-center">
              <b className="relative text-secondarycolor">200</b>
              <div className="relative text-base text-grey-1 inline-block md:w-[100px]">
                <p className="m-0 ">Happy</p>
                <p className="m-0 ">Customers</p>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-center">
              <b className="relative text-secondarycolor">4.9</b>
              <div className="relative text-base text-grey-1 inline-block md:w-[100px]">
                <p className="m-0 ">Overall</p>
                <p className="m-0 ">Rating</p>
              </div>
            </div>
          </div>
          </div>
          <div className='relative md:w-[370px] md:h-[500px]'>
        <img
              className=" rounded-[237px] md:w-[300px] md:h-[428px] object-cover"
              alt=""
              src={snowmountain}
            />
        </div>
    
        </div>
    </div>
  )
}

export default AboutUs

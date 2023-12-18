import React from 'react'

const FallIntoTravel = ({
  heading,
  details,
  description1,
  description2,
  description3,
  description4,
  i1,
  i2,
  i3,
  i4
}:any) => {

  // const handleClick=()=>{
   
  // }
  return (
    <div className=" mx-[70px]  mt-10">
    <p className="h-9 self-stretch text-[40px] font-bold mb-7  ">{heading}</p>
<div className="flex flex-col md:flex-row md:gap-x-10 gap-y-6 mt-[25px]">
<div>
<img src={i1} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl "/>
<p className="text-white text-[24px] -mt-10 ml-2 font-extrabold  rounded-lg ">{description1}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-xl px-4 py-2 bg-secondarycolor text-white mt-4 ">{details}</button>
</div>
<div>
<img src={i2} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl"/>
<p className="text-white text-[24px] -mt-10 ml-2 font-extrabold  ">{description2}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-xl px-4 py-2 bg-secondarycolor text-white mt-4">{details}</button>

</div>
<div>
<img src={i3} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl"/>
<p className="text-white text-[24px] -mt-10 ml-2 font-extrabold  ">{ description3}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-xl px-4 py-2 bg-secondarycolor text-white mt-4">{details}</button>

</div>
<div>
<img src={i4} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl"/>
<p className="text-white text-[24px] -mt-10 ml-2 font-extrabold ">{  description4}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-xl px-4 py-2 bg-secondarycolor text-white mt-4" >{details}</button>

</div>


</div>


  </div>
  )
}

export default FallIntoTravel
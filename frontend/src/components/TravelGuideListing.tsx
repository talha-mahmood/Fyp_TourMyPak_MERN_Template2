

import React, { useState } from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import travelguide from '../../public/travelguide.jpeg'
import { useNavigate } from "react-router-dom";
function TravelGuideListing() {
  const[recommended, setRecommended]=useState<boolean>(true)
  const[highRated, setHighRated]=useState<boolean>(false)
  const[lowPrice, setLowPrice]=useState<boolean>(false)

  const navigate=useNavigate()

  const handleClick=()=>{
    navigate(`/travelguidebooking`)
  }

  const handleClickRecommended=() => {
    setRecommended(true)
    setHighRated(false)
    setLowPrice(false)
  }
  const handleClickHighRated=() => {
    setRecommended(false)
    setHighRated(true)
    setLowPrice(false)
  }
  const handleClickLowPrice=() => {
    setRecommended(false)
    setHighRated(false)
    setLowPrice(true)
  }
  return (
    <div className="searchPage">
       <div className="searchPage__info">
   

   <button className={`border rounded-xl p-2  text-white hover:bg-primarycolor ${recommended? 'bg-primarycolor' : 'bg-secondarycolor'}`} onClick={handleClickRecommended} >Recommended</button>
   <button className={`border rounded-xl p-2  text-white hover:bg-primarycolor ${highRated? 'bg-primarycolor' : 'bg-secondarycolor'}`} onClick={handleClickHighRated}>High rated</button>
   <button className={`border rounded-xl p-2  text-white hover:bg-primarycolor ${lowPrice? 'bg-primarycolor' : 'bg-secondarycolor'}`}onClick={handleClickLowPrice}>Low Price</button>

 </div>
 <div onClick={handleClick}>
      <SearchResult
        img={travelguide}
        location="Islamabad"
        title="Liaqat Ali"
        description="Humble and Patient"
        star={4.9}
        price="PKR5000 / day"
        total=""
      />
      </div>
   <div onClick={handleClick}>
      <SearchResult
        img={travelguide}
        location="Islamabad"
        title="Liaqat Ali"
        description="Humble and Patient"
        star={4.9}
        price="PKR5000 / day"
        total=""
      />
      </div>
   <div onClick={handleClick}>
      <SearchResult
        img={travelguide}
        location="Islamabad"
        title="Liaqat Ali"
        description="Humble and Patient"
        star={4.9}
        price="PKR5000 / day"
        total=""
      />
      </div>
   <div onClick={handleClick}>
      <SearchResult
        img={travelguide}
        location="Islamabad"
        title="Liaqat Ali"
        description="Humble and Patient"
        star={4.9}
        price="PKR5000 / day"
        total=""
      />
      </div>
   <div onClick={handleClick}>
      <SearchResult
        img={travelguide}
        location="Islamabad"
        title="Liaqat Ali"
        description="Humble and Patient"
        star={4.9}
        price="PKR5000 / day"
        total=""
      />
      </div>
   <div onClick={handleClick}>
      <SearchResult
        img={travelguide}
        location="Islamabad"
        title="Liaqat Ali"
        description="Humble and Patient"
        star={4.9}
        price="PKR5000 / day"
        total=""
      />
      </div>
   <div onClick={handleClick}>
      <SearchResult
        img={travelguide}
        location="Islamabad"
        title="Liaqat Ali"
        description="Humble and Patient"
        star={4.9}
        price="PKR5000 / day"
        total=""
      />
      </div>
    
    </div>
  );
}

export default TravelGuideListing;

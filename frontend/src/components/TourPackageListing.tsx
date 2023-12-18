
import React, { useState } from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import skardu from '/skardu.jpg'
import {useNavigate} from'react-router-dom'
function TourPackageListing() {
  const[recommended, setRecommended]=useState<boolean>(true)
  const[highRated, setHighRated]=useState<boolean>(false)
  const[lowPrice, setLowPrice]=useState<boolean>(false)

  const navigate=useNavigate()

  const handleClick=()=>{
    navigate(`/tourpackagebooking`)
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
   

        <button className={`border rounded-xl p-2  text-sm text-white hover:bg-primarycolor ${recommended? 'bg-primarycolor' : 'bg-secondarycolor'}`} onClick={handleClickRecommended} >Recommended</button>
        <button className={`border rounded-xl p-2  text-sm text-white hover:bg-primarycolor ${highRated? 'bg-primarycolor' : 'bg-secondarycolor'}`} onClick={handleClickHighRated}>High rated</button>
        <button className={`border rounded-xl p-2  text-sm text-white hover:bg-primarycolor ${lowPrice? 'bg-primarycolor' : 'bg-secondarycolor'}`}onClick={handleClickLowPrice}>Low Price</button>

      </div>
      <div onClick={handleClick}>
      <SearchResult
        img={skardu}
        location="Islamabad to Skardu"
        title="2 days Skardu trip"
        description=".bornfire .hitea"
        star={4.73}
        price="PKR 10,000 per person"
        total=""
      />
     
      </div>
       <div onClick={handleClick}>
      <SearchResult
        img={skardu}
        location="Islamabad to Skardu"
        title="2 days Skardu trip"
        description=".bornfire .hitea"
        star={4.73}
        price="PKR 10,000 per person"
        total=""
      />
     
      </div>
       <div onClick={handleClick}>
      <SearchResult
        img={skardu}
        location="Islamabad to Skardu"
        title="2 days Skardu trip"
        description=".bornfire .hitea"
        star={4.73}
        price="PKR 10,000 per person"
        total=""
      />
     
      </div>
       <div onClick={handleClick}>
      <SearchResult
        img={skardu}
        location="Islamabad to Skardu"
        title="2 days Skardu trip"
        description=".bornfire .hitea"
        star={4.73}
        price="PKR 10,000 per person"
        total=""
      />
     
      </div>
       <div onClick={handleClick}>
      <SearchResult
        img={skardu}
        location="Islamabad to Skardu"
        title="2 days Skardu trip"
        description=".bornfire .hitea"
        star={4.73}
        price="PKR 10,000 per person"
        total=""
      />
     
      </div>
       <div onClick={handleClick}>
      <SearchResult
        img={skardu}
        location="Islamabad to Skardu"
        title="2 days Skardu trip"
        description=".bornfire .hitea"
        star={4.73}
        price="PKR 10,000 per person"
        total=""
      />
     
      </div>
       <div onClick={handleClick}>
      <SearchResult
        img={skardu}
        location="Islamabad to Skardu"
        title="2 days Skardu trip"
        description=".bornfire .hitea"
        star={4.73}
        price="PKR 10,000 per person"
        total=""
      />
     
      </div>
     
    </div>
  );
}

export default TourPackageListing;

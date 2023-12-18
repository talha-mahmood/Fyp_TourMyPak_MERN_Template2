import React from "react";
// import Header from "../components/layout/Header";
import TravelForm from "./TravelForm";
import FallIntoTravel from "./FallIntoTravel";
// import MyFooter from "./MyFooter";
import mainimage from '../../public/main5.jpg'

function Home() {
  return (
   
 
    <div className="">
      {/* <Header/> */}
     <div className="">
        <div className=" ">
         <img src={mainimage} alt="Heroposter" className=" w-full h-[600px] object-cover"/>
         </div>
     
      <div className=" absolute top-[200px] ">
        <TravelForm />
      </div>
 
      </div>
     
  
      <FallIntoTravel
      heading={"Top Tour Packages"}
      details={"Book Tour"}
      description1={" Isb-Chitral"}
      description2={"Isb-Skardu"}
      description3={"Isb-kaghan"}
      description4={"Isb-Pirchinasi"}
      i1={'/public/chitral.jpg'}
      i2={'/public/skardu.jpg'}
      i3={'/public/swat.jpg'}
      i4={'/public/Attabad.jpg'}
      />
      <FallIntoTravel
      heading={"Top Hotels"}
      details={"Book Hotel"}
      description1={"Skardu Hotel"}
      description2={"Skardu Hotel"}
      description3={"Skardu Hotel"}
      description4={"Skardu Hotel"}
      i1={'/public/hotel.jpeg'}
      i2={'/public/hotel.jpeg'}
      i3={'/public/hotel.jpeg'}
      i4={'/public/hotel.jpeg'}
      />
      <FallIntoTravel
      heading={"Top Car Bookings"}
      details={"Book Car"}
      description1={"Isb-Honda Civic"}
      description2={"Isb-Honda Civic"}
      description3={"Isb-Honda Civic"}
      description4={"Isb-Honda Civic"}
      i1={'../../public/civic.jpg'}
      i2={'../../public/civic.jpg'}
      i3={'../../public/civic.jpg'}
      i4={'../../public/civic.jpg'}
      />
    
      {/* <MyFooter /> */}
 
      
    </div>
   
   
  );
}

export default Home;

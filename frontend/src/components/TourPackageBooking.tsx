// import { useParams} from "react-router-dom";
import { useState} from "react";
import BookingWidget from "./BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "./AddressLink";
import { Context } from "./StateContext";
export default function TourPackageBooking() {
  // const {id} = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [place,setPlace] = useState('place');
  const {startDate}:any = Context()
  const {endDate}:any = Context()
const photo='/public/skardu.jpg'

  return (
    <div className="mt-4 bg-gray-100  px-8 pt-8 justify-center ">
      <h1 className="text-3xl">
        {/* {place.title} */}
        
        2 Days Weekend Skardu Trip
        </h1>
      <AddressLink>
        {/* {place.address} */}
        address
        </AddressLink>
      <PlaceGallery photo={photo} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl ">Description</h2>
            {/* {place.description} */}
            TourMyPak as promised comes to explore the beautiful north Belt every weekend with a trip to Skardu with sights including the beautiful Princess of Hope, and Buzzi Pass.
Join us for an adventurous night out camping by the beach shores and make lifelong memories
💸 𝐏𝐑𝐈𝐂𝐄 𝐎𝐅 𝐓𝐑𝐈𝐏:
𝐑𝐬.𝟏𝟎,𝟓𝟎𝟎/-Per Person
(Camping 3 person sharing)
𝐑𝐬. 𝟏𝟐,𝟓𝟎𝟎/- Per Person
(Room 4 person sharing)
*Separate 2-persons 𝐜𝐚𝐦𝐩 𝐬𝐡𝐚𝐫𝐢𝐧𝐠 with the additional charges of 𝐑𝐬 𝟏,𝟎𝟎𝟎/- (per person)
*Separate 2-persons 𝐫𝐨𝐨𝐦 𝐬𝐡𝐚𝐫𝐢𝐧𝐠 with the additional charges of 𝐑𝐬 𝟐,𝟓𝟎𝟎/- (per person)
𝑵𝑶𝑻𝑬: For a married couple or 2 Females or 2 Males only.
50% payment is to be made at the time of bookings & remaining 50% clear a day before departure for the trip.
-----------
          </div>
          <div className="font-bold">
          Departure: 
          {/* {place.checkIn} */}
          {startDate ? `${startDate.toLocaleDateString()} ` : ``}
          <br />
          Arrival: 
          {endDate ? `${endDate.toLocaleDateString()} ` : ``}
          {/* {place.checkOut} */}
         
          <br />
          Max number of persons:
          4       {/* {place.maxGuests} */}
          </div>
        </div>
        <div>
          <BookingWidget  />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {/* {place.extraInfo} */}
          
👩👧👦𝐊𝐈𝐃𝐒 𝐂𝐇𝐀𝐑𝐆𝐄𝐒 𝐃𝐄𝐓𝐀𝐈𝐋𝐒:
- 0% Charges on Below 4 year kid (NO SEAT)
- 75% Charges under 4-7 year kid (JUMPER SEAT).
- 100% Charges above 7 years (FULL SEAT).
🍽️ 𝐌𝐄𝐍𝐔 𝐃𝐔𝐑𝐈𝐍𝐆 𝐓𝐑𝐈𝐏:
𝐁𝐫𝐮𝐧𝐜𝐡 (𝟏 𝐭𝐢𝐦𝐞) at Winder:
Tea – Paratha – Omlette/Half Fry – Channa/Daal - Water
𝐇𝐢 - 𝐓𝐞𝐚 at Ormara:
Tea with Wonton/One Bite Samosa
𝐃𝐢𝐧𝐧𝐞𝐫 (𝟏 𝐭𝐢𝐦𝐞) at Ormara:
Chk. Tikka BBQ – Seekh Kabab – Paratha – Gulab Jamun – Cold Drinks – Water
𝐁𝐫𝐞𝐚𝐤-𝐟𝐚𝐬𝐭 (𝟏 𝐭𝐢𝐦𝐞) at Ormara:
Halwa – Puri – Tarkari – Tea – Water
𝐋𝐮𝐧𝐜𝐡 (𝟏 𝐭𝐢𝐦𝐞) at Winder:
Chk. Karhai – Daal/Sabzi – Roti – Salad – Cold drinks – Water
          </div>
      </div>
    </div>
  );
}

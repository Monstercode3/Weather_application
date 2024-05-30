import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";



const Inputs = ({setQuery, setUnits}) => {

  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if(city !== "") setQuery({q:city});
  };


  

  const handleCurrentLocation =() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords
        setQuery({lat: latitude, lon: longitude})
      })
    }
  }

  return (
    <div className="flex flex-row items-center justify-center mb-2">
        <div className="flex flex-row items-center justify-center w-2/4 space-x-4">
            <input 
            value = {city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="search city..." 
            className="text-gray-500 text-xl font-light p-2 w-full shadow-xl 
             capitalize focus:outline-none placeholder:lowercase"/>

            <BiSearch size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}/>

            <BiCurrentLocation size={30} className="cursor-pointer transition ease-out 
            hover:scale-125" color="black"
            onClick={handleCurrentLocation}/>
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button className="text-2xl font-medium transition ease-out
            hover:scale-125"
            onClick={() => setUnits("metric")}>°C</button>
            <p className="text-2xl font-medium mx-1">|</p>
            <button className="text-2xl font-medium transition ease-out
            hover:scale-125"
            onClick={() => setUnits("imperial")}>°F</button>
        </div>
    </div>
  )
}

export default Inputs;
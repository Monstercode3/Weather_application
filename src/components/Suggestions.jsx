import React from 'react'

const Suggestions = ({ setQuery }) => {

    const cities = [
        {
            id: 1,
            cityName: 'Bengaluru',
        },
        {
            id: 2,
            cityName: 'Srinagar',
        }, {
            id: 3,
            cityName: 'Delhi',
        }, {
            id: 4,
            cityName: 'Chennai',
        }, {
            id: 5,
            cityName: 'Vijayawada',
        },
    ];




    return (
        <div className=" flex items-center justify-around px-2 py-2">
            {cities.map((city) => (
                <button key={city.id} className="text-lg font-medium
                 hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in" 
                 onClick={() => setQuery({q: city.cityName})}>
                    {city.cityName}
                </button>
            ))
        }    
    </div>
  );
};

export default Suggestions;
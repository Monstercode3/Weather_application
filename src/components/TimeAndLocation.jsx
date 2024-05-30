import React from 'react'

const TimeAndLocation = ({weather: {formattedLocalTime, name, country}}) => {
  return (
    <div>
        <div className="flex items-center justify-center mt-3">
            <p className="text-xl font-highlight">{formattedLocalTime}</p>
        </div>
        <div className="flex items-center justify-center mt-2">
            <p className="text-3xl font-medium">{`${name}, ${country}`}</p>

        </div>
    </div>
  )
}

export default TimeAndLocation
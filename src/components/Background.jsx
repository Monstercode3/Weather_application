import { useEffect, useState } from "react"
import getFormattedWeatherData from '../services/weatherServices'
import clear from '../assets/videos/clear.mp4'
import cloudy from '../assets/videos/cloudy.mp4'
import drizzle from '../assets/videos/drizzle.mp4'
import foggy from '../assets/videos/foggy.mp4'
import rain from '../assets/videos/rain.mp4'
import snow from '../assets/videos/snow.mp4'
import thunder from '../assets/videos/thunder.mp4'

const Background = () => {

    const { details } = getFormattedWeatherData()

    const [video, setVideo] = useState({details})

    useEffect(() => {
        if(details){
            let videoString = details
            if(videoString.toLowerCase().includes('clear')){
                setVideo(clear)
            }
            else if(videoString.toLowerCase().includes('cloudy')){
                setVideo(cloudy)
            }
            else if(videoString.toLowerCase().includes('drizzle')){
                setVideo(drizzle)
            }
            else if(videoString.toLowerCase().includes('atmosphere')){
                setVideo(foggy)
            }
            else if(videoString.toLowerCase().includes('rain')){
                setVideo(rain)
            }
            else if(videoString.toLowerCase().includes('snow')){
                setVideo(snow)
            }
            else if(videoString.toLowerCase().includes('thunder')){
                setVideo(thunder)
            }
        }
    }, [details])

    return(
        <video src={video}></video>
    )
}

export default Background;
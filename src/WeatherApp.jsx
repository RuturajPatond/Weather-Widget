import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 29.2,
        humidity: 57,
        temp: 28.05,
        tempMax: 28.05,
        tempMin: 28.05,
        weather: "haze",
    });
    let updateInfo = (newresult) => {
        setWeatherInfo(newresult);
    }

    return (
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>        
    );
}
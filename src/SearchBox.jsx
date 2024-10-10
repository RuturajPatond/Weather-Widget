import {useState} from "react";
import Button from '@mui/material/Button';
import TextField  from "@mui/material/TextField";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0fa33a73488c054889ce93fd05522298";
    let [city, setCity] = useState("");
    // searchbox to search city
    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        
        let weather = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(weather);
        return weather;
    };

    let handleCity = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }
    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <h3>Search for the Weather!</h3>
                <TextField id="outlined-basic" 
                label="City Name" 
                variant="outlined" 
                value={city}
                onChange={handleCity}
                required/>
                <br/><br/>
                <Button variant="contained" 
                type="submit"
                >Submit</Button>
            </form>
        </div>
    );
}
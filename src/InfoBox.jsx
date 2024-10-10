import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}) {
    
    let URL = "https://plus.unsplash.com/premium_photo-1689605458770-1e546a8e2809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVzdHklMjBhdG1vc3BoZXJlfGVufDB8fDB8fHww";
    const cold_url = "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGQlMjBzZWFzb24lMjBhdG1vc3BoZXJlfGVufDB8fDB8fHww";
    const hot_url = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    const rainy_url = "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHJhaW55JTIwc2Vhc29uJTIwYXRtb3NwaGVyZXxlbnwwfHwwfHx8MA%3D%3D";
    
    
    return (
        
        <div className="infobox">
            <h3>WeatherInfo </h3>
            <div className="cardcontainer">
                <Card className="container">
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80? 
                        rainy_url :
                        (info.temp > 15) ?
                        hot_url:
                        cold_url
                    }
                    title="green iguana"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}{
                        info.humidity > 80? 
                        <ThunderstormIcon/> :
                        (info.temp > 15) ?
                        <WbSunnyIcon/>:
                        <AcUnitIcon/>
                    }
                    
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p>temperature = {info.temp}</p>
                        <p>humidity = {info.humidity}</p>
                        <p>Minimum_Temp = {info.tempMin}</p>
                        <p>Maximum_Temp = {info.tempMax}</p>
                        <p>weather = {info.weather}</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}
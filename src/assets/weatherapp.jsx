// Weatherapp.js
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import "./weatherapp.css";

export default function Weatherapp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Yeola",
        feelslike: 25.78,
        temp: 45.66,
        tempMin: 25.05,
        humidity: 47,
        weather: "haze"
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }} className="container">
            <h1>Weather app</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}

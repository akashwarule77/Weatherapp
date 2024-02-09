import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./Searchbox.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f70bde63003858fe63114db984753dcd";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            throw error; // Rethrow the error to handle it in handleSubmit
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(city);
        setCity("");
        try {
            let newinfo = await getWeatherInfo(city);
            updateInfo(newinfo);
        } catch (error) {
            console.error("Error updating weather info:", error);
        }
    };

    return (
        <div className='Searchbox1'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" value={city} onChange={handleChange} variant="outlined" required />
                <br /><br />
                <Button variant="contained" type='submit' endIcon={<SendIcon />}>
                    Search
                </Button>
            </form>
            <br />
        </div>
    );
}

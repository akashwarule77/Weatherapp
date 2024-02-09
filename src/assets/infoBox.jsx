// InfoBox.js
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./infoBox.css";

export default function InfoBox({ info }) {
    console.log(info);
    if (!info) {
        return <div>No weather info available</div>;
    }
    return (
        <div className="infobox">
            <div className='card'>
                <Card sx={{ maxWidth: 345 }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="weather.jpg"
                            alt="Weather"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"span"}>
                                <div>Temperature = {info.temp}&deg;C</div>
                                <div>Min Temperature = {info.tempMin}&deg;C</div>
                                <div>Humidity = {info.humidity}</div>
                                <div>Weather = {info.weather}</div>
                                <div>FeelsLike = {info.feelslike}&deg;C</div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}

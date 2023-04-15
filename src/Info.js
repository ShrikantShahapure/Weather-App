import React from 'react';
import cloudy from './cloudy.png'; // Import the image
import './index.css';

const Info = ({ text }) => {
    return (
        <>
            <section class="weather-part">
                <img src={cloudy} alt="Weather Icon" />
                <div class="tempreture">
                    <span class="number">{text.temp}°</span>
                    C
                </div>
                <div class="weather">{text.description} </div>
                <div class="location">
                    <i class='bx bx-map'></i>
                    <span>{text.city_name}</span>
                </div>
                <div class="bottom-details">
                    <div class="column feels">
                        <i class='bx bxs-thermometer'></i>
                        <div class="details">
                            <div class="tempreture">
                                <span class="number"> {text.feels_like} °C</span>
                                <span class="degreWheather App
                            pune Search Weather Icon 28.41°Ce"></span>
                            </div>
                            <p>Feels like</p>
                        </div>
                        <i class="fa-solid fa-temperature-three-quarters fa-xl"></i>
                    </div>
                    <div class="column humidity">
                        <i class='bx bxs-droplet-half'></i>
                        <div class="details">
                            <span class="number">{text.humidity}</span>
                            <p> Humidity </p>
                        </div>
                        <i class="fa-solid fa-droplet fa-2xl"></i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info;
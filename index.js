const API_KEY = "201ab342483d5e3d2f7c15deaf2e3856";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-img");

async function data(city) {
    const resp = await fetch(API_URL +city+ `&appid=${API_KEY}`);
    var data = await resp.json();

    if(data.cod == "404") {
        console.log("here");
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }
    else {
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" Km/hr ";
    
        if(data.weather[0].main == 'Clouds') {
            weatherIcon.src = "assets/images/clouds.png"
        }
        else if(data.weather[0].main == 'Clear') {
            weatherIcon.src = "assets/images/clear.png"
        }
        else if(data.weather[0].main == 'Rain') {
            weatherIcon.src = "assets/images/rain.png"
        }
        else if(data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "assets/images/drizzle.png"
        }
        else if(data.weather[0].main == 'Mist') {
            weatherIcon.src = "assets/images/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
    }

   
}


searchBtn.addEventListener("click", () =>{
    data(searchBox.value);
})


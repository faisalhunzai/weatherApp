const apikey = "f39a68360efcdccf6f4b518798137e1e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";


const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search Button");
const weathericon =document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.main.wind.speed + " kh/m";    

    if(data.weather[0].main =="Clouds"){
        weathericon.scr ="images/clouds.png";
    } 
    else if (data.weather[0].main == "clear"){
        weathericon.scr ="images/clear.png";
    }
    else if (data.weather[0].main == "clear"){
        weathericon.scr ="images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weathericon.scr ="images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weathericon.scr ="images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weathericon.scr ="images/mist.png";
    }

    document.querySelector(".weather").style.disply ="block";

}

searchBtn.addEventListener("click", () =>{
const searchBox =document.querySelector(".search input");
    checkWeather(searchBox.value)
})
checkWeather();
let url="https://api.openweathermap.org/data/2.5/weather?q=jammu&appid=5bf3314e33e56e717a27c240b0058e9c&units=metric";
let city=document.querySelector(".city");
let temp=document.querySelector(".temp");
let humidity=document.querySelector(".Humidity");
let wind=document.querySelector(".wind");
// let searchBox=document.querySelector(".search input");
// let searchBtn=document.querySelector(".search button");

//  searchBtn.addEventListener("click",()=>{
//     checkWeather(searchBox.value);
//  });
let searchButton = document.querySelector(".search button");
    searchButton.addEventListener("click", function () {
        let cityName = document.querySelector(".search input").value;
        if (cityName) {
            // Update the API URL with the user-input city name
            url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5bf3314e33e56e717a27c240b0058e9c&units=metric`;

            // Update weather data
            checkWeather();
        }
    });


async function checkWeather(){
    try{
        let res= await fetch(url);
    let data=await res.json();
    console.log(data);
    console.log(data.main.humidity);
    city.innerHTML=data.name;
    temp.innerHTML=Math.floor(data.main.temp)+"°c";
    humidity.innerHTML=(data.main.humidity)+"%";
    wind.innerHTML=data.wind.speed+"km/hr";
    let weatherIcon=document.querySelector(".weatherIcon");
    weatherIcon.src=`./images/${(data.weather[0].main).toLowerCase()}.png`;
    }
    catch(err){
        console.log("error is",err);
    }
};


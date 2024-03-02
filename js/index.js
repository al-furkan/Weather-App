const ApiKey="093ede7dbc29996fe862235f8980d1b0";
//||"d0243174cd84ecdd7cb359220071a625";
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric";
const ConvartApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button" );
const weatherIcon = document.querySelector(".weather-icon" );


async function checkweather(city){
  const response = await fetch(ConvartApiUrl+city+`&appid=${ApiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML= data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"ºC";
  document.querySelector(".humiduty").innerHTML= data.main.humidity+"%";
  document.querySelector(".wind").innerHTML= data.wind.speed+"km / h";

  if(data.weather[0].main=="Clouds"){
    weatherIcon.src="./img/clouds.png";
  }
  else if(data.weather[0].main=="Clear"){
    weatherIcon.src="./img/clear.png";
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src="./img/rain.png";
  }
  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="./img/drizzle.png";
  }
  else if(data.weather[0].main=="Mist"){
    weatherIcon.src="./img/mist.png";
  }


}
searchButton.addEventListener("click",()=>{
  checkweather(searchBox.value);
  setTimeout(()=>{
    searchBox.value='';
  },5000)
})


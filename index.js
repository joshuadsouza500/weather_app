
/*Getting api*/
const apikey="bef7562028fa0aed688353ceb4bf787a";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbar = document.querySelector(".searchbox input");
const btn = document.querySelector(".btn");
const pics = document.querySelector(".pic");

/* fetching data */
async function weathercheck(city){
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
 var data = await response.json(); 
   
  printdata(data);
}

btn.addEventListener("click",()=> {
 weathercheck(searchbar.value);
})
searchbar.addEventListener("keypress",(e)=> {
    if (e.key === "Enter") {
       btn.click();
    }
  });
/* displaying data using innerhtml*/
function printdata(data){
    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity :  "+ data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = "Wind speed :  "+data.wind.speed +" Km/hr";
    document.querySelector(".real").innerHTML = "Real feel :  "+data.main.feels_like + "°C";
// to change images//      
    if(data.weather[0].main === "Mist"){
      pics.src = "images/mist.png";
      document.querySelector(".descpt").innerHTML = "Mist";
    }else if(data.weather[0].main ==="Clouds"){
        pics.src = "images/clouds.png";
        document.querySelector(".descpt").innerHTML = "Cloudy";
    }else if(data.weather[0].main ==="Clear"){
        pics.src ="images/clear.png";
        document.querySelector(".descpt").innerHTML = "Clear";
    }else if(data.weather[0].main ==="Drizlle"){
        pics.src ="images/drizzle.png";
        document.querySelector(".descpt").innerHTML = "Drizzle";
    }else if(data.weather[0].main ==="Snow"){
        pics.src ="images/snow.png";
        document.querySelector(".descpt").innerHTML = "Snow";
    } else if(data.weather[0].main ==="Rain"){
        pics.src ="images/rain.png";
        document.querySelector(".descpt").innerHTML = "Rain";
    }
}


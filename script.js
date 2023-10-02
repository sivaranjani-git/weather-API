//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

let API_KEY = "16858af1d29e86067eea56886c2342c6";

getweatherData = () => {
    const URL ='httpsapi.openweathermap.org/data/2.5/weather';

    const Full_Url = "$(URL)?lat==$(city)&appid-$(API_KEY)&units-imperial"
    weatherpromise = fetch(Full_Url);
    console.log(city);

    return weatherPromise.than(()=> {
        return response.json()
    })
}

function searchCity(){
    const city = document.getElementById("city-input").value;

    getweatherData(city)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    });
}
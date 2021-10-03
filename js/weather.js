function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude
    console.log(lat,lon);
    const API = "010d2884c358c0fb7fbf22b5c1c44d41";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoError(){
    alert("Please turn on your GPS");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
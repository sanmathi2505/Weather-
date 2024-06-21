function getWeather() {
    const apiKey='1ffe19b79d62a224f5f01bc92d3a56fd';
    const city=document.getElementById('city').value;

    if (!city){
        alert('Please enter city');
        return;
    }

    const currentWeatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
    
    }

function displayWeather(data) {
    const tempDivInfo=document.getElementById('temp-div');
    const weatherInfoDiv=document.getElementById('weather-info');
    const weatherIcon=document.getElementById('weather-icon');

    weatherInfoDiv.innerHTML='';
    tempDivInfo.innerHTML='';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName=data.name;
        const temperature=Math.round(data.main.temp - 273.15); 
        const description=data.weather[0].description;
        const iconCode=data.weather[0].icon;
        const iconUrl=`https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML=`<p>${temperature}°C</p>`;

        const weatherHtml=`
            <p>${cityName}</p>
            <p>${description}</p>
        `;

        tempDivInfo.innerHTML=temperatureHTML;
        weatherInfoDiv.innerHTML=weatherHtml;
        weatherIcon.src=iconUrl;
        weatherIcon.alt=description;

        showImage();
    }
}

function showImage() {
    const weatherIcon=document.getElementById('weather-icon');
    weatherIcon.style.display='block'; 

}
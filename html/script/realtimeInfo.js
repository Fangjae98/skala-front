import { getLiveWeather } from './weatherAPI.js';

const citySelect = document.querySelector('#city-select');
const weatherBox = document.querySelector('#weather-box');
const currentTime = new Date().toLocaleString('ko-KR');

citySelect.addEventListener('change', async function(event) {

    const selectedValue = event.target.value;
    if (selectedValue === "none") {
        weatherBox.innerHTML = "<p> 도시를 선택하세요. </p>";
        return;
    }

    const coords = selectedValue.split(',');
    const cityName = citySelect.options[citySelect.selectedIndex].text;

    weatherBox.innerHTML = "<p> 데이터 수신 중... 📡 </p>";

    const weatherInfo = await getLiveWeather(coords[0], coords[1]);

    if (weatherInfo) {
        weatherBox.innerHTML = `
            <div style="background-color: #d8e2ee; padding: 15px; margin-top: 10px;">
                <h4> 실시간 날씨: ${cityName} </h4>
                <p> <strong> 🌡️ 기온:  ${weatherInfo.temp}°C </strong> </p>
                <p> <strong> 💧 습도:  ${weatherInfo.humidity}% </strong> </p>
                <p style= color: gray;"> <small> 조회 시간 : ${currentTime} </small> </p>
            </div>
        `;
    } else {
        weatherBox.innerHTML = "<p> ⚠️ 데이터를 불러오지 못했습니다. ⚠️ </p>";
    }
});
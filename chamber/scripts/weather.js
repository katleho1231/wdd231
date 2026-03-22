const apiKey = "YOUR_API_KEY";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Johannesburg&appid=${apiKey}&units=metric`;

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("temp").textContent = `Temp: ${data.list[0].main.temp}°C`;
  document.getElementById("desc").textContent = data.list[0].weather[0].description;

  const forecastDiv = document.getElementById("forecast");

  for (let i = 0; i < 3; i++) {
    const day = data.list[i * 8];
    const p = document.createElement("p");
    p.textContent = `Day ${i + 1}: ${day.main.temp}°C`;
    forecastDiv.appendChild(p);
  }
}

getWeather();

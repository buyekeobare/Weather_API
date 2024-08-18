function displayTemperature(response) {
  console.log(response);

  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let country = response.data.country;
  let description = response.data.condition.description;

  temperatureElement.innerHTML = `The temperature in ${city}, ${country} is ${temperature}&degC (${description})`;
}

let city = "Sydney";
let apiKey = "my_api_key";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
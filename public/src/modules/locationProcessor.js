import * as API from './apiData';
import * as WEP from './weatherProcessor';
import * as Doman from './doman';


const getCurrentPosition = async (lat, lng) => { // eslint-disable-line consistent-return
  const apiKey = API.fetchApiKey();
  const webUrl = API.fetchUrlLoc(lat, lng, apiKey);

  try {
    const response = await fetch(webUrl, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    Doman.showError();
  }
};

const success = async (position) => {
  try {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const currentLocationWeatherData = await getCurrentPosition(latitude, longitude);
    const weatherData = await WEP.getWeatherData(currentLocationWeatherData.name);
    WEP.displayWeatherInfo(weatherData);
    Doman.changeBg(weatherData.weather[0].main);
  } catch (error) {
    Doman.showError();
  } finally {
    Doman.hideLoader();
  }
};

const error = () => {
  Doman.hideLoader();
  Doman.showError();
};

const onLoad = () => {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser'); // eslint-disable-line no-alert
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

export default onLoad;

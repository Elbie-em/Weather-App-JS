import * as Doman from './modules/doman';
import onLoad from './modules/locationProcessor';
import * as WEP from './modules/weatherProcessor';

const loadInputData = async () => {
  Doman.showLoader();
  const city = Doman.getData('search-input');
  const weatherData = await WEP.getWeatherData(city);
  WEP.displayWeatherInfo(weatherData);
  Doman.changeBg(weatherData.weather[0].main);
};

Doman.assignButton('btn-search', loadInputData);
Doman.showLoader();
onLoad();

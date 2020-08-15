import * as Doman from './modules/doman';
import * as Loc from './modules/locationProcessor';
import * as WEP from '../src/modules/weatherProcessor';

const loadInputData = async () => {
	Doman.showLoader();
	const city = Doman.getData('search-input');
	let weatherData = await WEP.getWeatherData(city);
	WEP.displayWeatherInfo(weatherData);
	Doman.changeBg(weatherData.weather[0].main);
}

Doman.assignButton('btn-search', loadInputData);
Doman.showLoader();
Loc.onLoad();




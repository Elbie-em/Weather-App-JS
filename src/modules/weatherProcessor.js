import * as API from './apiData';
import * as Doman from './doman';

const getWeatherData = async (location) => {
	const apiKey = API.fetchApiKey();
	const webUrl = API.fetchUrlDef(location, apiKey);

	try {
		const response = await fetch(webUrl, { mode: 'cors' });
		const weatherData = await response.json();
		return weatherData;
	} catch (error) {
		Doman.showError();
	}

}

const displayWeatherInfo = async (data) => {
	try {
		let weatherData = await data;
		Doman.displayData(weatherData);
	} catch (error) {
		Doman.showError();
	}finally{
		Doman.hideLoader();
	}
}

export {getWeatherData,displayWeatherInfo}

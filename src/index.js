import * as Doman from './modules/doman'

const fetchApiKey = () => {
	const apiKey = '079e5ccf7838205ec9abca89cac417bd';
	return apiKey;
}

const fetchUrl = (location,apiKey) => {
	let webUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;
	return webUrl;
}

const getWeatherData = async (location) => {
	const apiKey = fetchApiKey();
	const webUrl = fetchUrl(location,apiKey);

	try{
		const response = await fetch(webUrl,{mode: 'cors'});
		const weatherData = await response.json();
		return weatherData;
	}catch(error){
		console.log('Invalid')
	}
	
}

const displayWeatherInfo = async (data) => {
	try{
		let weatherData = await data;
		Doman.displayData(weatherData);
	}catch(error){
		console.log('Invalid');
	}
}

const loadData = async () => {
	const city = Doman.getData('search-input')
	let weatherData = await getWeatherData(city);
    displayWeatherInfo(weatherData);
}

Doman.assignButton('btn-search',loadData);






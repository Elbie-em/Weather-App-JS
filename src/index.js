const fetchApiKey = () => {
	const apiKey = '079e5ccf7838205ec9abca89cac417bd';
	return apiKey;
}

const fetchUrl = (location,apiKey) => {
	let webUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
	return webUrl;
}

const getWeatherData = async (location) => {
	const apiKey = fetchApiKey();
	const webUrl = fetchUrl(location,apiKey);

	const response = await fetch(webUrl,{mode: 'cors'});
	const weatherData = await response.json();
	
	return weatherData;
}



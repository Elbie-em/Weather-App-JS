import * as API from './apiData';
import * as WEP from './weatherProcessor';
import * as Doman from './doman';


const getCurrentPosition = async (lat, lng) => {
	const apiKey = API.fetchApiKey();
	let webUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=${apiKey}`;
	
	try {
		const response = await fetch(webUrl, { mode: 'cors' });
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Invalid')
	}
}

const success = async (position) => {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const currentLocationWeatherData = await getCurrentPosition(latitude, longitude);
	let weatherData = await WEP.getWeatherData(currentLocationWeatherData.name);
	Doman.hideLoader();
	WEP.displayWeatherInfo(weatherData);
}

const error = () => {
	Doman.hideLoader();
	Doman.showError();
}

const onLoad = () => {
	if (!navigator.geolocation) {
		alert('Geolocation is not supported by your browser');
	} else {
		navigator.geolocation.getCurrentPosition(success, error);
	}
}

export {
    onLoad
}
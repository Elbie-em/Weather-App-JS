import * as API from './apiData';
import * as WEP from './weatherProcessor';
import * as Doman from './doman';


const getCurrentPosition = async (lat, lng) => {
	const apiKey = API.fetchApiKey();
	let webUrl = API.fetchUrlLoc(lat,lng,apiKey);
	
	try {
		const response = await fetch(webUrl, { mode: 'cors' });
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Invalid')
	}
}

const success = async (position) => {
	try {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		const currentLocationWeatherData = await getCurrentPosition(latitude, longitude);
		let weatherData = await WEP.getWeatherData(currentLocationWeatherData.name);
		WEP.displayWeatherInfo(weatherData);
		Doman.changeBg(weatherData.weather[0].main);
	}catch(error){
		Doman.showError();
	}finally{
		Doman.hideLoader();
	}
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
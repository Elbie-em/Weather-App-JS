const fetchApiKey = () => {
	const apiKey = process.env.API_KEY;
	return apiKey;
}

const fetchUrl = (location, apiKey) => {
	let webUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;
	return webUrl;
}

export {fetchApiKey,fetchUrl};

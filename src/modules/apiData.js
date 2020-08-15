
const fetchApiKey = () => {
	const apiKey = '079e5ccf7838205ec9abca89cac417bd';
	return apiKey;
}

const fetchUrl = (location, apiKey) => {
	let webUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;
	return webUrl;
}

export {fetchApiKey,fetchUrl};

const fetchApiKey = () => {
	const apiKey = process.env.API_KEY;
	return apiKey;
}

const fetchUrlDef = (location, apiKey) => {
	let webUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;
	return webUrl;
}

const fetchUrlLoc = (latitude,longitude,apiKey) => {
	let webUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKey}`;
	return webUrl;
}

export {fetchApiKey,fetchUrlDef,fetchUrlLoc};

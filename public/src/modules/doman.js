import * as DP from './dataProcessor'
import '../css/styles.css';
const UI = () => {
	const container = document.getElementById('content');	
	const dataContainer = document.createElement('div');
	dataContainer.className = 'w-75 mx-auto text-center mt-3 border rounded d-flex flex-column text-white'

	return {container,dataContainer}
}

const dataCard = (container,data) => {
	const location = document.createElement('div');
	location.innerHTML = `${data.name}, ${data.sys.country} <i class="fas fa-map-marker-alt"></i>`;

	const tempInfo = document.createElement('div');
	tempInfo.className = 'd-flex flex-row justify-content-between';

	const iconDiv = document.createElement('div');
	iconDiv.className = 'p-3 w-25 ml-3';
	const icon = document.createElement('img');
	icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	iconDiv.appendChild(icon);

	const tempCont = document.createElement('div');
	tempCont.className = 'p-3'
	const tempNo = document.createElement('h1');
	tempNo.id = 'temperature';
	tempNo.style.fontSize = '75px';
	tempNo.className = 'zoom-temp';
	tempNo.innerText = `${data.main.temp} °`;
	tempCont.appendChild(tempNo);

	const unitCont = document.createElement('div');
	unitCont.className = 'p-3 w-25 text-left';
	const celcius = document.createElement('span');
	celcius.id = 'cel';
	celcius.className = 'mt-3 hov';
	celcius.classList.add('border','border-success','rounded','bg-success');
	celcius.innerHTML = 'C <br>';
	celcius.onclick = () => { displayCelcius(data.main.temp,data.main.feels_like);}

	const fahrenheit = document.createElement('span');
	fahrenheit.id = 'fah';
	fahrenheit.className = 'mt-3 hov';
	fahrenheit.innerText = 'F';
	fahrenheit.onclick = () => { displayFahrenhiet(data.main.temp,data.main.feels_like);}

	unitCont.appendChild(celcius);
	unitCont.appendChild(fahrenheit)

	tempInfo.appendChild(iconDiv);
	tempInfo.appendChild(tempCont);
	tempInfo.appendChild(unitCont);

	const condition = document.createElement('div');
	condition.style.fontSize = '30px';
	condition.innerText = data.weather[0].main;

	const tempExtras = document.createElement('div');
	tempExtras.className = 'd-flex flex-row justify-content-between';

	const extraOne = document.createElement('div');
	extraOne.className = 'w-50 text-right';
	extraOne.id = 'extraTemp';
	extraOne.innerText = `Feels like ${data.main.feels_like}°c`;

	const extraTwo = document.createElement('div');
	extraTwo.className = 'w-50 text-center';
	extraTwo.innerHTML = `Wind ${data.wind.speed} mph`;

	const extraThree = document.createElement('div');
	extraThree.className = 'w-50 text-left';
	extraThree.innerHTML = `Humidity ${data.main.humidity}%`;

	tempExtras.appendChild(extraOne);
	tempExtras.appendChild(extraTwo);
	tempExtras.appendChild(extraThree);

	const sunInfo = document.createElement('div');
	sunInfo.className = 'd-flex flex-row justify-content-between';

	const sRise = document.createElement('div');
	sRise.className = 'w-50 text-right p-3';
	sRise.innerText = `Sunrise  ${DP.convertTime(data.sys.sunrise)}`;

	const sSet = document.createElement('div');
	sSet.className = 'w-50 text-left p-3';
	sSet.innerHTML = `Sunset ${DP.convertTime(data.sys.sunset)}`;

	sunInfo.appendChild(sRise);
	sunInfo.appendChild(sSet);

	container.appendChild(location);
	container.appendChild(tempInfo);
	container.appendChild(condition);
	container.appendChild(tempExtras);
	container.appendChild(sunInfo);
}

const displayData = (data) => {
	const ui = UI();
	ui.container.innerHTML = '';
	dataCard(ui.dataContainer,data);
	ui.container.appendChild(ui.dataContainer);
}

const displayFahrenhiet = (temp,extraTemp) => {
	const grF = document.getElementById('fah');
	const grC = document.getElementById('cel');
	const unitLabel = document.getElementById('temperature');
	const extraLabel = document.getElementById('extraTemp');
	const unit = DP.convertTemp(temp);
	const extraUnit = DP.convertTemp(extraTemp)
	unitLabel.innerText = `${unit} °`;
	extraLabel.innerText = `Feels like ${extraUnit}°F`;
	grF.classList.add('border','border-success','rounded','bg-success');
	grC.classList.remove('border','border-success','rounded','bg-success');
}

const displayCelcius = (unit,extraUnit) => {
	const grF = document.getElementById('fah');
	const grC = document.getElementById('cel');
	const unitLabel = document.getElementById('temperature');
	const extraLabel = document.getElementById('extraTemp');
	unitLabel.innerText = `${unit} °`;
	extraLabel.innerText = `Feels like ${extraUnit}°c`;
	grC.classList.add('border','border-success','rounded','bg-success');
	grF.classList.remove('border','border-success','rounded','bg-success');
}

const assignButton = (id,method) => {
	const btn = document.getElementById(id);
	btn.onclick = method;
} 

const getData = (id) => {
	const input = document.getElementById(id);
	return input.value;
}

const changeBg = (condition) => {
	const vid = document.getElementById('bg-vid');
	switch (condition) {
		case "Thunderstorm":
	    case "Drizzle":
		case "Rain":
			vid.src = '../src/assets/videos/rain.mp4';
			break;
		case "Snow":
			vid.src = '../src/assets/videos/snow.mp4';
			break;
		case "Clear":
			vid.src = '../src/assets/videos/clearsky.mp4';
			break;
		case "Clouds":
			vid.src = '../src/assets/videos/clouds.mp4';
			break;
		default:
			vid.src = '../src/assets/videos/vars.mp4';
			break;
	}
} 

const errorCard = (container) => {
	const icon = document.createElement('img');
	icon.className = 'danger-icon m-3 mx-auto';
	icon.src = '../src/assets/images/error.gif';

	const msg = document.createElement('h4');
	msg.className = 'text-danger font-weight-bolder';
	msg.innerText = 'OOPS! Something went wrong';

	const msgE = document.createElement('h6');
	msgE.className = 'text-danger';
	msgE.innerHTML = 'It seems that there was an error processing your request:<br> ---enter a valid city in the search bar to see results<br> ---enable your location <br>---check your internet connection';

	container.appendChild(icon);
	container.appendChild(msg);
	container.appendChild(msgE);

}

const displayErrorCard = () => {
	const uiError = UI();
	uiError.container.innerHTML = '';
	errorCard(uiError.dataContainer);
	uiError.container.appendChild(uiError.dataContainer);
}

const showError = () => {
	displayErrorCard();
}

const showLoader = () => {
	const uiLoader = UI();
	uiLoader.container.innerHTML = '';
	const loaderDiv = document.createElement('div');
    loaderDiv.id = 'loading-info';
    
    const spinner = document.createElement('div');
    spinner.className = 'spinner-grow text-secondary loader';
    spinner.setAttribute("role","status");

    const loaderText = document.createElement('h3');

    loaderText.innerText = 'Loading Weather Data...';

    loaderDiv.appendChild(spinner);
    loaderDiv.appendChild(loaderText)

    uiLoader.container.appendChild(loaderDiv);
	
}

const hideLoader = () => {
	$('#loading-info').hide();
}

export {
	displayData,assignButton,getData,changeBg,showError,showLoader,hideLoader
}
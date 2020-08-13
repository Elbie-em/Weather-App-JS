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
	sRise.innerText = `Sunrise  ${convertTime(data.sys.sunrise)}`;

	const sSet = document.createElement('div');
	sSet.className = 'w-50 text-left p-3';
	sSet.innerHTML = `Sunset ${convertTime(data.sys.sunset)}`;

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
	dataCard(ui.dataContainer,data);
	ui.container.appendChild(ui.dataContainer);
}

const convertTime = (unixTimeStamp) => {
	let date = new Date(unixTimeStamp * 1000);
	let minutes = date.getMinutes();
	if (minutes < 10){
		minutes = `0${minutes}`;
	}
	let cDate = `${date.getHours()}:${minutes}`;
	return cDate;
}

const convertTemp = (temp) => {
	const unit = (temp * (9/5)) + 32
	const conversion = Math.round(unit * 10) / 10
	return conversion
}

const displayFahrenhiet = (temp,extraTemp) => {
	const grF = document.getElementById('fah');
	const grC = document.getElementById('cel');
	const unitLabel = document.getElementById('temperature');
	const extraLabel = document.getElementById('extraTemp');
	const unit = convertTemp(temp);
	const extraUnit = convertTemp(extraTemp)
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

export {
	displayData
}
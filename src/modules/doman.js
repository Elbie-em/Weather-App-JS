const UI = () => {
	const container = document.getElementById('content');
	const dataContainer = document.createElement('div');
	dataContainer.className = 'w-75 mx-auto text-center mt-3 border d-flex flex-column text-white'

	return {container,dataContainer}
}

const dataCard = (container,data) => {
	const location = document.createElement('div');
	location.innerHTML = `${data.name}, ${data.sys.country} <i class="fas fa-map-marker-alt"></i>`;

	const tempInfo = document.createElement('div');
	tempInfo.className = 'd-flex flex-row justify-content-between';

	const icon = document.createElement('div');
	icon.className = 'p-3 w-25';
	icon.innerHTML = '<i class="fas fa-cloud fa-3x mt-3"></i>';

	const tempCont = document.createElement('div');
	tempCont.className = 'p-3'
	const tempNo = document.createElement('h1');
	tempNo.style.fontSize = '75px';
	tempNo.innerText = `${data.main.temp} °`;
	tempCont.appendChild(tempNo);

	const unitCont = document.createElement('div');
	unitCont.className = 'p-3 w-25 text-left d-flex align-items-center';
	unitCont.innerHTML = 'C <br> F';

	tempInfo.appendChild(icon);
	tempInfo.appendChild(tempCont);
	tempInfo.appendChild(unitCont);

	const condition = document.createElement('div');
	condition.style.fontSize = '30px';
	condition.innerText = data.weather[0].main;

	const tempExtras = document.createElement('div');
	tempExtras.className = 'd-flex flex-row justify-content-between';

	const extraOne = document.createElement('div');
	extraOne.className = 'w-50 text-right';
	extraOne.innerText = `Feels like ${data.main.feels_like}°c`;

	const extraTwo = document.createElement('div');
	extraTwo.className = 'w-50 text-center';
	extraTwo.innerHTML = `Wind <i class="fas fa-wind"></i> ${data.wind.speed} mph`;

	const extraThree = document.createElement('div');
	extraThree.className = 'w-50 text-left';
	extraThree.innerHTML = `Humidity <i class="fas fa-temperature-low"></i> ${data.main.humidity}%`;

	tempExtras.appendChild(extraOne);
	tempExtras.appendChild(extraTwo);
	tempExtras.appendChild(extraThree);

	const sunInfo = document.createElement('div');
	sunInfo.className = 'd-flex flex-row justify-content-between';

	const sRise = document.createElement('div');
	sRise.className = 'w-50 text-right p-3';
	sRise.innerText = `Sunrise 05:00`;

	const sSet = document.createElement('div');
	sSet.className = 'w-50 text-left p-3';
	sSet.innerHTML = `Sunset 19:00`;

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

export {
	displayData
}
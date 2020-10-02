const searchButton = document.getElementById('search-btn');
const temp_description = document.getElementById('temp-desc');
const myData = document.getElementById('weather-data');
let weatherDetail = document.getElementById('details');

function validateResponse(response){
	if (!response.ok) {
		throw Error(response.statusText)
	}
	return response
}


/* function readAsJson(response){
	return response.json()
	console.log(response.json())
}

*/
function displayLogo(responseAsBlob){
	return responseAsBlob.weather.icon.blob()
	let imgContainer = document.getElementById('weather-logo');
	let imgElement = imgContainer.appendChild('img');
	let imgUrl = URL.createObjectURL('responseAsBlob.weather[0].icon');
	imgElement.src = imgUrl;
	console.log(responseAsBlob.weather.icon);
}


function logError(err){
	console.log('some Error has occured', err)
}

function fetchContent(){
	const key  = '89aa259c6e0fd4e27dc153c0c608ebfc';
	cityName = document.getElementById('search-text').value;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
	.then(validateResponse)
	.then(displayDetail)
	.then((data)=> {
		const []
	})
//	.then(displayLogo)
	//.then(showLogo)
	//.then(readAsJson)
	//.then(logResult)
	.catch(logError)
}
function detailAsJson(response){
	return response.json();
}

function displayDetail(response){
	detail = response.weather[0]
	main = response.main
	temp_description.innerHTML = detail.description;
	console.log(detail)
	
}
function showLogo(imgage){
	let imgContainer = document.getElementById('Weather-logo');
	let imgElement = imgContainer.appendChild('img');
	let imgSrc = URL.createObjectURL(displayLogo)
	imgElement.src = imgSrc;
}

function logResult(result){
	console.log('result fetched successfully', result)
}

searchButton.addEventListener('click', fetchContent)
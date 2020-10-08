const form = document.querySelector('form')
const list = document.querySelector('.cities');
let msg = document.getElementById('msg')
let input = document.getElementById('search-text')
let citiName = document.getElementById('citi')
let citi_temp = document.getElementById('temp')
let imgContainer= document.getElementById('imgElement')
let caption = document.getElementById('mycaption')

form.addEventListener('submit', event =>{
	event.preventDefault();
	var weatherReport = list.querySelectorAll('.weather-report')
	const key  = '89aa259c6e0fd4e27dc153c0c608ebfc';
	cityName = input.value;
	let url = (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
	fetch(url)
	.then(response => response.json())
	.then(data => {
		const {main, sys, weather, name} = data;
		const icon = `https://openweathermap.org/img/wn/${
			weather[0]["icon"]
		}@2x.png`;
		
		citiName.innerHTML = `<h3>${name} <sup> ${sys.country}</sup></h3>`
		citi_temp.innerHTML = `${Math.round(main.temp)}<sup> °C </sup>`
		imgElement = document.createElement('img')
		imgElement.setAttribute('src', icon)
		imgContainer.appendChild(imgElement)
		
		/*
		var imgElement = document.createElement('img')
		imgElement.setAttribute('src', icon)
		var imgArray = new Array()
		imgArray = imgElement;
		if (imgArray > 1) {
			imgContainer.appendChild(imgArray[-1])
		} else{
			imgContainer.appendChild(imgElement)
		}
		*/

		caption.innerHTML = `${weather[0]['description']}`
	})
	.catch( err =>{
		msg.innerHTML = 'enter a valid city name'
	})

	form.reset()
	
})


/*		
		const li = document.createElement('li');
		li.classList.add('city')
		const report = `
				<h2>
					${name}
					<sup>${sys.country}<sup>
				</h2>		
				<div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
				<figure>
					<img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
					<figcaption>${weather[0]["description"]}</figcaption>
				</figure>
			`
			li.innerHTML = report
			list.appendChild(li)
		*/
function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const ul = document.getElementById('daily-data')
const urls = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&\
exclude={part}&appid={YOUR API KEY}'


fetch(url)
.then((resp) =>resp.json())	
.then(function(data){
	let response = data.results
	return response.map(function(info){
		let  li = createNode('li'),
				p1  = createNode('temp'),
				p2 = createNode('wind_speed'),
				p3 = createNode('dt')
		append(p, p1);
		append(p, p2);
		append(p, p3);
		append(ul, li)
		p.innerHTML =`${data.temp}`;
	})
	.catch(function(err))
	console.log(err)
})
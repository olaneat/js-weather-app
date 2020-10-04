let currentTime = document.getElementById('currentTime');


function myClock(){
	var time = new Date()
	var hours = time.getHours();
	var mins = time.getMinutes();
	var secs = time.getSeconds(); 

	var newHour = updateTime(hours);
	var newMins = updateTime(mins);
	var newSecs = updateTime(secs)
	currentTime.innerHTML = `${newHour}:${newMins}:${newSecs} ` 
	var t = setTimeout(myClock, 1000)

	function updateTime(i){
		if (i < 10) {
			return '0' + i;
		}
		else{
			return i;
		}
	}
}
window.addEventListener('load', myClock)




var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.95;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 < video.duration){
		video.currentTime = video.currentTime + 15;
		console.log(video.currentTime);
	} else {
		console.log("Going back to the beginning");
		video.currentTime = 0;
		console.log(video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value / 100);
	video.volume = this.value / 100;
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});









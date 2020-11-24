var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol=document.querySelector("#volume").innerHTML = video.volume *100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=0.9;
	console.log("Slow down the video to "+ video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *=1.1;
	console.log("Speed up the video to "+ video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5
	if (video.ended){
		video.currentTime =0
	}
	console.log("Current video time is "+ video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(mute == true){
		video.muted = false;
		mute = false;
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Video Unmuted")
	}
	else{
		video.muted = true;
		mute = true;
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Video Muted")
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function(){
	sliderValue = document.querySelector("#volumeSlider").value;
	video.volume = sliderValue / 100;
	document.querySelector("#volume").innerHTML = sliderValue + "%";
	console.log(this);
	console.log("Volume is " + this.value);
})

document.querySelector("#old").addEventListener("click", function() {
	console.log("The video is in Grayscale");
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("The video is back to origional");
	video.classList.remove("oldTime");
});
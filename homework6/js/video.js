var video = document.getElementById("myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
    video.play(); 
    console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	var curSpeed = video.playbackRate;
    video.playbackRate = .9*(curSpeed);
    console.log("Current Speed is: " + curSpeed);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate = video.playbackRate;
    video.playbackRate = (curSpeed) /.9;
    console.log("Current Speed is: " + curSpeed);
});

document.querySelector("#skip").addEventListener("click", function() {
    if(video.currentTime + 5 > video.duratiom){
        video.currentTime = 0;
    }
    else{
        video.currentTime += 5;
    }
    console.log("current time of the video: " + video.currentTime);
    video.play();
    
});

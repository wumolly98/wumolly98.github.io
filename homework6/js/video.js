var video = document.getElementById("myVideo");

window.addEventListener("load", function() {
    video = document.querySelector("#myVideo");
    console.log("Starting");
    console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play(); 
    document.querySelector("#volume").innerHTML = 100*(video.volume) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();

});

document.querySelector("#slower").addEventListener("click", function() {
	var curSpeed = video.playbackRate;
    video.playbackRate = .9*(curSpeed);
    console.log("Current Speed is: " + curSpeed);
});

document.querySelector("#faster").addEventListener("click", function() {
    var curSpeed = video.playbackRate;
    video.playbackRate = (curSpeed)/.9;
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

document.querySelector("#volumeSlider").addEventListener("change", function(){
    console.log(this);
    console.log(this.value);
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted === false) {    
        video.muted = true;
 }
    console.log("Mute Video");
    video.mute(); 
    
});

document.querySelector("#unmute").addEventListener("click", function() {
    if (video.unmuted === false) {    
        video.unmuted = true;
 }
    console.log("Unmute Video");
    video.unmute(); 
    
});
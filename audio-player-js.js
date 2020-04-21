


console.log(localStorage.getItem("songName"));
console.log(localStorage.getItem("imgSrc"));

var songName = localStorage.getItem("songName");
var imgSrc = localStorage.getItem("imgSrc");
console.log(imgSrc)

var bg = document.getElementById("bg");
bg.style.backgroundImage = 'url(' + imgSrc + ')';

var mainImage = document.querySelector("#main img");
console.log(mainImage);
mainImage.src=localStorage.getItem('imgSrc');

var songTitle = document.getElementById("songTitle");
songTitle.innerHTML = localStorage.getItem('songName');

var latestReleasesArr=["./assets/songs/Yaad Piya Ki Aane Lagi - Neha Kakkar.mp3","./assets/songs/Dheeme Dheeme - Tony Kakkar.mp3",
"./assets/songs/Tu Bhi Royega - Jyotica Tangri.mp3","./assets/songs/Ole Ole 2 - Jawaani Jaaneman.mp3"];
var latestReleasesImageArr=["./assets/images/latest-release-1.jpg","./assets/images/latest-release-2.jpeg",
"./assets/images/latest-release-3.jpg","./assets/images/latest-release-4.jpg"];
var latestReleasesTitleArr = ["Yaad Piya Ki Aane Lagi","Dheeme Dheeme","Tu Bhi Royega","Ole Ole"];
var latestReleasesIndex;

var start = false;
var ppid;

var song = new Audio();
song.src=localStorage.getItem('playSong');
console.log(localStorage.getItem('playSong'))
console.log(song.src)
latestReleasesIndex = latestReleasesArr.indexOf(song.getAttribute("src"));
console.log(song.getAttribute("src"))
console.log(song);
console.log(latestReleasesIndex);


function play(id){
	ppid = id;
    if(start == false){
    	song.play();
    	console.log(start);
    	console.log(id);
    	id.setAttribute("class", "fa fa-pause");
    	start = true;
    }else{
    	song.pause();
    	console.log(start);
    	id.setAttribute("class", "fa fa-play-circle");
    	start = false;
    }
    
}

song.addEventListener("timeupdate",function(){
	var pos = song.currentTime/song.duration;
	console.log(song.currentTime,song.duration);
	console.log(pos);
	 document.getElementById("fill").style.width = pos*100 + "%";
})

function change(){
	song.src = latestReleasesArr[latestReleasesIndex];
	console.log(song.src);
	imgSrc = latestReleasesImageArr[latestReleasesIndex];
	console.log(imgSrc)
	bg.style.backgroundImage = 'url(' + imgSrc + ')';
	mainImage.src=imgSrc;
	if(ppid != null){
		ppid.setAttribute("class", "fa fa-pause");
		song.play();
	}
}

function next(){
	latestReleasesIndex++;
	if(latestReleasesIndex >= latestReleasesArr.length){
		latestReleasesIndex= 0;
	}
	change();
	
}

function prev(){
	latestReleasesIndex--;
	if(latestReleasesIndex < 0){
		latestReleasesIndex= latestReleasesArr.length-1;
	}
	change();
}



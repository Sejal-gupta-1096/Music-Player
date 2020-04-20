
var imgSrc;

function storeData(songObj){
	console.log(songObj);
	  var songName = songObj.getAttribute("data-songName");
	  localStorage.setItem("songName",songName);
	  console.log(songName);
	  imgSrc = songObj.getAttribute("data-imgSrc");
	  localStorage.setItem("imgSrc",imgSrc);
	  console.log(imgSrc);
	  var playSong = songObj.getAttribute("data-playSong");
	  localStorage.setItem("playSong",playSong);
	  console.log(playSong);

	    var queueList = document.getElementById("queue-list");
		var listItem = document.createElement("li");
		queueList.appendChild(listItem);
		var queue = document.createElement("div");
		queue.classList.add("queue");
		listItem.appendChild(queue);
		var imgContainer = document.createElement("div");
		imgContainer.classList.add("q-img-container");
		queue.appendChild(imgContainer);
		var img = document.createElement("img");
		img.setAttribute("src" , imgSrc);
		imgContainer.appendChild(img);
		var iplay = document.createElement("i");
		iplay.classList.add("fa");
		iplay.classList.add("fa-play");
		iplay.classList.add("play-btn");
		imgContainer.appendChild(iplay);
		var iheart = document.createElement("i");
		iheart.classList.add("fa");
		iheart.classList.add("fa-heart");
		queue.appendChild(iheart);
		console.log(queueList);




}





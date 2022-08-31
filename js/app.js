/* targets */
const breedInput = document.querySelector("#breedInput");
const breedName = document.querySelector("#breedName");
const dogImage = document.querySelector("#dogImage");
const breedDetails = document.querySelector("#breedDetails");
/* targets */
document.addEventListener("DOMContentLoaded", () => {
	fetchRandomImage().then((data) => {
		renderRandomImage(data);
	});
	fetchBreedList().then((data) => {
		renderBreedList(data);
	});
});

function fetchRandomImage(breed = null) {
	breedName.textContent = "Hang on";
	dogImage.src = "./images/loading1.gif";
	dogImage.alt = "Loading...";
	breedDetails.textContent = "Lemme fetch your favorite bud...";
	url = breed
		? `https://dog.ceo/api/breed/${breed}/images/random`
		: "https://dog.ceo/api/breeds/image/random";
	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
}

function fetchBreedList() {
	url = "https://dog.ceo/api/breeds/list/all";
	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
}

function renderBreedList(data) {
	const fetchedList = Object.keys(data.message);
	fetchedList.forEach((breed) => {
		option = document.createElement("option");
		option.value = breed;
		option.innerText = breed;
		breedInput.appendChild(option);
	});
}

function renderRandomImage(data) {
	let url = data.message;
	dogImage.src = url;
	breedName.textContent = url.split("/")[4];
	dogImage.alt = breedName.textContent;
	breedDetails.textContent = "Hope you like your new Friend!";
}

//get random image by breed
breedInput.addEventListener("change", (e) => {
	fetchRandomImage(e.target.value).then((data) => {
		renderRandomImage(data);
	});
});

//change text on hover
breedDetails.addEventListener("mouseover", (e) => {
	breedDetails.textContent = "Click me to meet a new friend!";
});

breedDetails.addEventListener("mouseout", (e) => {
	breedDetails.textContent = "Hope you like your new Friend!";
});

//change image on click
breedDetails.addEventListener("click", (e) => {
	let breed = breedInput.value || null;
	fetchRandomImage(breed).then((data) => {
		renderRandomImage(data);
	});
});

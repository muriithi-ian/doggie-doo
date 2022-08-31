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
	breedDetails.textContent = "Hope you like your new Friend!";
}

breedInput.addEventListener("change", (e) => {
	breedName.textContent = "Hang on";
	dogImage.src = "./images/loading1.gif";
	breedDetails.textContent = "Lemme fetch your favourite bud...";
	fetchRandomImage(e.target.value).then((data) => {
		renderRandomImage(data);
	});
});

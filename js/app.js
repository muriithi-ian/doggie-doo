/* targets */
const breedInput = document.querySelector("#breedInput");
/* targets */
document.addEventListener("DOMContentLoaded", () => {
	fetchRandomImage();
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
		.then((data) => {
			console.log(data);
		})
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

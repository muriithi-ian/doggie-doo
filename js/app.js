/* targets */
/* targets */
document.addEventListener("DOMContentLoaded", () => {
	fetchRandomImage();
	fetchBreedList();
});

function fetchRandomImage(breed = null) {
	url = breed
		? `https://dog.ceo/api/breed/${breed}/images/random`
		: "https://dog.ceo/api/breeds/image/random";
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			err;
		});
}

function fetchBreedList() {
	url = "https://dog.ceo/api/breeds/list/all";
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			err;
		});
}

function renderBreedList(data) {}

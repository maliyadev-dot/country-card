const countryNameElement = document.getElementById('country-name');
const countryInput = document.getElementById('country-input');
const updateButton = document.getElementById('update-button');

updateButton.addEventListener('click', function () {
    const newCountry = countryInput.value;         // read what user typed
    countryNameElement.textContent = newCountry;  // update the <h1>
});

async function testCountryFetch() {
    const response = await fetch('https://countries.dev/name/Canada');
    const data = await response.json();
    console.log(data);
}

testCountryFetch();
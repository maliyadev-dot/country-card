const countryInput = document.getElementById('country-input');
const updateButton = document.getElementById('update-button');

updateButton.addEventListener('click', async () => {
    const name = countryInput.value.trim();
    if (! name) {
        console.log('No country name provided');
        return;        // nothing typed, do nothing
    }

    try {
        const response = await fetch(`https://countries.dev/name/${encodeURIComponent(name)}`);

        if (! response.ok) {
            console.log('HTTP error', response.status);
            return;
        }

        const data = await response.json();
        const country = data[0]; // Assuming the API returns an array of countries, we take the first one
        console.log('Country data:', country);
    } catch (error) {
        console.error('Fetch failed:', error);
    }
});
// Get DOM elements
const countryInput = document.getElementById('country-input');
const updateButton = document.getElementById('update-button');

const countryNameEl = document.getElementById('country-name');
const countryCapitalEl = document.getElementById('country-capital');
const countryRegionEl = document.getElementById('country-region');
const countryPopulationEl = document.getElementById('country-population');
const countryCurrencyEl = document.getElementById('country-currency');

// Add click listener
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

        // Update the UI with the fetched country data
        countryNameEl.textContent = country.name;
        countryCapitalEl.textContent = country.capital;
        countryRegionEl.textContent = country.region;
        countryPopulationEl.textContent = country.population.toLocaleString
            ? country.population.toLocaleString()
            : country.population;
        
        // Update currency information
        if (country.currencies && country.currencies.length > 0) {
            const mainCurrency = country.currencies[0];
            // Try name + code if available
            if (mainCurrency.name && mainCurrency.code) {
                countryCurrencyEl.textContent = `${mainCurrency.name} (${mainCurrency.code})`;
            } else if (mainCurrency.name) {
                countryCurrencyEl.textContent = mainCurrency.name;
            } else if (mainCurrency.code) {
                countryCurrencyEl.textContent = mainCurrency.code;
            }
        }

    } catch (error) {
        console.error('Fetch failed:', error);
    }
});
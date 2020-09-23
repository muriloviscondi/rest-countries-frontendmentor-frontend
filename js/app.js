let countries = [];

addEventListener("load", () => {
  fetchCountries();
});

async function fetchCountries() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();

  countries = data.map((country) => {
    const { name, alpha3Code, capital, population, region, flag } = country;
    return { name, alpha3Code, capital, population, region, flag };
  });

  return render();
}

function render() {
  listCountries();
}

function listCountries() {
  let divCountries = document.querySelector(".countries");

  let cardsCountriesHTML = "";
  divCountries.innerHTML = "";

  countries.forEach((country) => {
    const cards = `
      <div class="card">
        <div class="flag">
          <a href="description/${country.alpha3Code.toLowerCase()}">
            <img src="${country.flag}" alt="${country.name}" title="${
      country.name
    }" />
          </a>
        </div>

        <div class="description">
          <div class="description__title">
            <h2>${country.name}</h2>
          </div>
          <div class="description__country">
            <p><strong>Population:</strong> ${country.population}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
          </div>
        </div>
      </div>
    `;

    cardsCountriesHTML += cards;
  });

  divCountries.innerHTML = cardsCountriesHTML;
}

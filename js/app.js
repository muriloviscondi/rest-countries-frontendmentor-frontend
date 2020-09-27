let countries = [];
let countriesFilter = [];

addEventListener("load", () => {
  fetchCountries();
});

async function fetchCountries() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();

  countries = data.map((country) => {
    const {
      nativeName,
      name,
      alpha3Code,
      population,
      region,
      subregion,
      capital,
      flag,
      topLevelDomain,
      currencies,
      languages,
    } = country;
    return {
      nativeName,
      name,
      alpha3Code,
      population,
      region,
      subregion,
      capital,
      flag,
      topLevelDomain,
      currencies,
      languages,
    };
  });

  countriesFilter = [...countries];

  return render();
}

function render() {
  listCountries();
  filteredCountries();
  showCountry();
}

function listCountries() {
  let divCountries = document.querySelector(".countries");

  let cardsCountriesHTML = "";
  divCountries.innerHTML = "";

  countriesFilter.forEach((country) => {
    const cards = innerCards(country);

    cardsCountriesHTML += cards;
  });

  divCountries.innerHTML = cardsCountriesHTML;
}

function filteredCountries() {
  const search = document.querySelector("#search");

  search.addEventListener("keyup", (event) => {
    const { key } = event;
    const { value } = event.target;

    // if (key !== "Enter") return;

    searchingCountries(value.toLowerCase());
  });
}

function searchingCountries(value) {
  countriesFilter = countries.filter((item) => {
    return item.name.toLowerCase().includes(value);
  });

  render();
}

function showCountry() {
  const modal = document.querySelector("#modal");
  const close = document.querySelector("#close");
  const cards = document.querySelectorAll(".flag");

  let modalContent = document.querySelector("#modal__content");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      modalContent.innerHTML = "";

      const id = card.getAttribute("id");
      modal.classList.add("active");

      const descriptionCountry = countries.find((country) => {
        return country.alpha3Code.toLowerCase() === id;
      });

      modalContent.innerHTML = innerDescription(descriptionCountry);
      console.log(descriptionCountry);
    });
  });

  close.addEventListener("click", () => {
    modalContent.includes = "";
    modal.classList.remove("active");
  });
}

function innerCards(value) {
  const card = `
    <div class="card">
      <div id=${value.alpha3Code.toLowerCase()} class="flag">
        <a>
          <img src="${value.flag}" alt="${value.name}" title="${value.name}" />
        </a>
      </div>

      <div class="description">
        <div class="description__title">
          <h2>${value.name}</h2>
        </div>
        <div class="description__value">
          <p><strong>Population:</strong> ${value.population.toLocaleString(
            "pt-BR"
          )}</p>
          <p><strong>Region:</strong> ${value.region}</p>
          <p><strong>Capital:</strong> ${value.capital}</p>
        </div>
      </div>
    </div>
  `;
  return card;
}

function innerDescription(value) {
  const card = `
    <div class="card">
      <div id=${value.alpha3Code.toLowerCase()} class="flag">
        <a>
          <img src="${value.flag}" alt="${value.name}" title="${value.name}" />
        </a>
      </div>

      <div class="description">
        <div id="description-title" class="description__title">
          <h2>${value.name}</h2>
          <div class="description__grid-content">
            <div class="description__value">
              <p><strong>Native Name:</strong> ${value.nativeName}</p>
              <p><strong>Population:</strong> ${value.population.toLocaleString(
                "pt-BR"
              )}</p>
              <p><strong>Region:</strong> ${value.region}</p>
              <p><strong>Sub Region:</strong> ${value.subregion}</p>
              <p><strong>Capital:</strong> ${value.capital}</p>
            </div>

            <div class="description__value">
              <p><strong>Top Level Domain:</strong> ${value.topLevelDomain}</p>
              <p><strong>currencies:</strong> ${value.currencies.name}</p>
              <p><strong>Region:</strong>
              ${value.languages.map((language) => {
                return ` <span>${language.name}</span>`;
              })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return card;
}

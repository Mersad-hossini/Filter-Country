let $ = document;
const wrapper = $.querySelector(".wrapper");
const selectBtn = $.querySelector(".select-btn");
const optionsUl = $.querySelector(".options");
const inputSearch = $.querySelector(".input-search");
const CountryLable = $.querySelector(".Country-name");

let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Italy",
  "Japan",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Russia",
  "Romania",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
];

function toggleBtn() {
    wrapper.classList.toggle("active")
}

function setCountries() {

    let li = null
    countries.forEach(country => {
        li = `<li onclick='updateName(this)'>${country}</li>`
        optionsUl.insertAdjacentHTML("beforeend", li)
    })
}

function updateName(countryName) {
    let allCountries = optionsUl.children

    inputSearch.value = ""

    for(let mainCountry of allCountries) {
        mainCountry.classList.remove('selected')
    }

    if(!countryName.className.includes("selected")) {
        countryName.classList.add("selected")
    }

    CountryLable.innerHTML = countryName.innerHTML
    wrapper.classList.remove("active")
}

inputSearch.addEventListener("keyup", () => {

    let inputValue = inputSearch.value.toLocaleLowerCase()

    let searchCountries = countries.filter(country => country.toLocaleLowerCase().startsWith(inputValue))
    .map(country => `<li onclick='updateName(this)'>${country}</li>`).join('')
    
    optionsUl.innerHTML = searchCountries ? searchCountries : "<p>Not Found!!!</p>"
})

selectBtn.addEventListener("click", toggleBtn)
window.addEventListener("load", setCountries)
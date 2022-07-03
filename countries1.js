const loadCountries = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountrie(data));

}

loadCountries();
const displayCountrie = counties => {
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        countriesDiv.appendChild(h3);
    });
}
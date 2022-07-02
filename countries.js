// arrow function load

const loadCountries = () => {


    fetch('https://restcountries.eu/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();







const displayCountries = counties => {

    const countriesDiv = document.getElementById('count');
    counties.forEach(country => {
        const div = document.createComment('div');
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        countriesDiv.appendChild(h3);
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        countriesDiv.appendChild(p);
        div.appendChild(p);
        countriesDiv.appendChild(div);


    });

}
// import fetchCountries from './js/fetchCountries.js';
import debouns from 'lodash.debounce'
import fetchCountries from './fetchCountries'
import countrieListTemplate from '../tamplate/countrieList.hbs'
import countryListItemTemplates from '../tamplate/countryListItem.hbs'
import notifications from './notifications.js'

const ul = document.querySelector('.country')
const input = document.querySelector('.search__input')

function changeInputValue(e) {
    ul.innerHTML = '';
    fetchCountries(e.target.value)
    .then(res=> render(res))   
}
function render(res) {
    if (res.length > 10 ){
        notifications.tooManyMatches()
    }  else if (res.length >2 && res.length < 10){
        ul.innerHTML = countrieListTemplate(res)       
    } else if (res.length===1){
        ul.innerHTML = countryListItemTemplates(res)
    } else if (ul.value.length === 0 ){
        
    }
}
input.addEventListener('input',debouns(changeInputValue,500))




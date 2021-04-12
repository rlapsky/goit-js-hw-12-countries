import notifications from './notifications.js'
export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
        if(response.ok){
            return response.json()
        } else {
            notifications.badRequest(error)
        }
    })
    .catch(error=>notifications.badRequest(error))
}

// BASE URL
let baseURL = "https://www.themoviedb.org/3";
let apiKey = "8cb6aed0d12c28440923542ce73a7345"; //&api_key=8cb6aed0d12c28440923542ce73a7345

// AUTHENTICATION
let authenticationURL = baseURL + "/authentication";
let tokenURL = authenticationURL + "/token";
let newTokenRequest = tokenURL + "/new";

// SEARCH
let searchURL = baseURL + "/search";
let searchCompanies = searchURL + "/company";
let searchCollections = searchURL + "/collection";
let searchKeywords = searchURL + "/keyword";
let searchMovies = searchURL + "/movie";
let searchMultiSearch = searchURL + "/multi";
let searchPeople = searchURL + "/person";
let searchTVShows = searchURL + "/tv";

//Person
let personURL = baseURL + "/person"
let lastestPersonURL = personURL + "/latest"
let combinedCreditsURL = personURL + "/combined_credits"

function getLastPerson(){

}

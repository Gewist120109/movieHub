"use strict";

const api_key = "29b5400e65ed332f97427365cc09606d";
const imageBaseURL = "https://image.tmdb.org/t/p/";

// fetch data from a server using the 'URL' and passes  the result in JSON data to a 'callback' function, along with an option parameter if has 'optionalParam'

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };

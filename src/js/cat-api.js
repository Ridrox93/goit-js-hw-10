const BASE_URL = 'https://api.thecatapi.com/v1';

import axios from "axios";

axios.defaults.headers.common["x-api-key"] = " api_key=live_711r8yTv9xG2fO9BQTLfum7QEckQQCT3OFOGlcwBlvo8Km84wEsjWYirfj4xrscp";

export function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`)
        .then(response => {
           
            return response.data;
        })
        .catch(error => {

            throw new Error("Помилка запиту:", error.message);
        });

}


export function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
        .then(response => {
          
            return response.data;
        })
        .catch(error => {

            throw new Error("Помилка запиту:", error.message);
        });

}

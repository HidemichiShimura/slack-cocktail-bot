import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export function lookupRandomCocktail (){
    const options = {
        "port": null,
        "headers": {
            "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
            "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
            "useQueryString": true
        }
    };

    return axios.get('https://the-cocktail-db.p.rapidapi.com/random.php', options)
        .then(function (response) {
            return response.data.drinks[0].strDrink;
        })
        .catch(function (error) {
            console.log(error);
        });
}
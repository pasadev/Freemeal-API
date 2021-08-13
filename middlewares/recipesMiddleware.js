import axios from 'axios';

import {
    FETCH_ALL_MEALS,
    saveAllMeals
} from '../actions/recipes';



const recipesMiddleware = (store) => (next) => (action) => {

  console.log("hihi middlewsare thaezs")
  const baseURL = 'www.themealdb.com/api/json/v1/1/';
  switch (action.type) {
    case FETCH_ALL_MEALS:
        console.log("in middleware")
      axios.get(`${baseURL}/random.php`)
        .then((response) => {
            console.log(response.data)
          store.dispatch(saveAllMeals(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;


      default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default recipesMiddleware;
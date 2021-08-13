import {
    SAVE_ALL_MEALS
  } from '../actions/recipes';


  const initialState = null;
  
  const recipesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_ALL_MEALS:
  
        return {
          ...state,
  
          meals: action.meals,
        };
  
  
  
        default: return state;
  
  };
}
  export default  recipesReducer;
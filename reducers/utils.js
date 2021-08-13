import {
    TOOGLE_BURGER_MENU,
  } from '../actions/utils';
  
  const initialState = {
    burgerMenuOpen: false,
  
  
  };
  
  const utils = (state = initialState, action = {}) => {
    switch (action.type) {
      case TOOGLE_BURGER_MENU:
        // return a new state
        return {
          // spread the current state
          ...state,
          // reverse the value of burgerMenuOpen
          burgerMenuOpen: !state.burgerMenuOpen,
        };
  
      default: return state;
    }
  };
  
  export default utils;
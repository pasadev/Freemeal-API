// actions for the recipes

export const FETCH_ALL_MEALS = 'FETCH_ALL_MEALS';
export const SAVE_ALL_MEALS = 'FETCH_ALL_MEALS';


// action creators for the recipes


export const fetchAllMeals = (/* newValue */) => ({
    type: FETCH_ALL_MEALS,
    /* value: newValue, */
  });

  export const saveAllMeals = (meals) => ({
      type: SAVE_ALL_MEALS,
      meals,
  })
import { configureStore } from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension'
import recipesMiddleware from '../middlewares/recipesMiddleware'


import recipesReducer from '../reducers';

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    

  },
  /*
  middleware: {
    recipes: recipesMiddleware,
  }
  */
})

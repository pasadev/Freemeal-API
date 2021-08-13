import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './data.json';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';

import {fetchAllMeals} from '../../actions/recipes';

const Recipes = () => {


  const meals = useSelector((state) => state.recipes)
  const dispatch = useDispatch()
    const iterateMealsList = (json) => {

      
    
        for ( var i = 0; i < json.length; i++) {
            var obj = data[i];
             console.log(obj)
    
            
        }    
    }

    const existingIngredients = [];

    const iterateIngredients = (oneMeal) => {
      for (let entry of Object.entries(oneMeal)) {
          if (entry[0].includes("strIngredient")){
              //check if it is strIngredient
            if (entry[1] !== "") {
              //check if ingredient value is not empty
              existingIngredients.push(entry[1])
            }
          }
      }

      if (Object.keys(oneMeal))
      return oneMeal.key

    }

  useEffect(() => {
      console.log(meals)
      dispatch(fetchAllMeals())
    iterateIngredients(data.meals[0])
    // component did mount  
    //fetchAllMeals()
    // I did not find the error why fetchAllMeals is not a function
    // thus i couldn't do the api call.
    
    iterateMealsList(data)
    //This is a test data for creating the html
}, [dispatch]);



const MealCard = styled.div`
background-color:gray;
border: 1 px solid black;
flex-flow: row wrap;
width: 300px;
margin: 20px
`


const mealsList = iterateMealsList(data)

useEffect(() => {
    console.log('hello')
}, [mealsList])


  return (
    <>

          <div className="recipes-content" >
              <ul style={{display: 'flex'}}>
                  {data.meals.map(function(meal, index)
                  {
                      return <li key= {index}>
                      
                      <MealCard>
                          <img src={meal.strMealThumb} style={{width:"100%"}}></img>
                          <h2>{meal.strMeal}</h2> <br/>
                          <p>{meal.strArea}</p>
                          <br/>
                          <p>{meal.strTags}</p>
                      </MealCard>
                      </li>
                      
                  })}
              </ul>
             {mealsList}
          </div>
          
    </>
  );
};

// parentChapter not always full
export default Recipes;
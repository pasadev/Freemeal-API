
Smood React Interview Project
I - Introduction
This project’s goal is to demonstrate that you have an intermediate level on react
technology.
As requirement, You should demonstrate that you know how to :
- create a component
- create a container (a set of components)
- use hooks
- React hooks (useEffect, useMemo, ...)
- build your own hook (For fetching api data)
- Use the core react library features
- Use RxJS library (observable pattern)
- Use Promise with Await/Async pattern
- Use Redux pattern (state, actions, ....)
- Handle API Error properly
- Create a scalable react app (from a directory structure perspective)
- use of Axios for fetching data
- Use of “Styled library” for building custom components.
(https://styled-components.com)
- (bonus) Use of typescript
It’s not mandatory, but we encourage you to choose react-native to build this project.
You can use any design / color / icon
II - Project topic
You will have to build a simple dashboard in React / React Native for the public meal
API (https://www.themealdb.com).
III - Project Requirement
A) The Layout
For the Layout, you will have to build a NavBar, a SideMenu and a FooterBar
components. This layout will be used with react-router to display others pages
properly.
Layout should be responsive on the Web.
1) The Nav Bar
- It should contain a burger icon for opening the side menu
component.
- It should contain a title on the left side with value “Smood Meal
API Explorer”
- on the right corner, It should contain a linkedin icon button linked
to your profile or for anonymous candidates a sample page
(google.fr).
2) The Side Menu
- Side Menu should be able to open / close
- menu opening state should be maintain in local storage,
- Menu opening / closing should be animated (simple easing)
- Side menu should contain :
- A title “Smood”
- a link to the page “meals list” (default page)
- a link to the page “contact”
3) The Footer Bar
- Footer Bar component contains a fake copyright with your
name.
- example : (c) Eric 2021
B) The meals list page
- it should display a list of meals in a datatable.
- It should display a search field input which relies on the meal API to
display results.
- it should allow sorting
- (bonus) it should allow pagination
- on row click, it should redirect to the meal page
- data should be read from and written to a redux store.
- datatable fields should be :
- strMealThumb
- strMeal
- strArea
- strTags
- the count of strIngredient fields
C) The meal detail page
- Create a card component and display properly the meal’s fields
D) The contact page
- Create a contact form (name, email, message, submit button).
- onSubmit, you will have to display a message box modal with the
data.
- this should rely on redux action.

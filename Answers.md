1. What problem does the context API help solve?

It helps to solve the problem of having to pass down props from component to component known as “prop drilling,” which can be an issue when you have a lot of components in your app that require those same props. Context provides a way to share data/values between components, without having to directly pass a props through every level of the component tree. 


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions- an object that has 2 properties (type and payload). They type property is a string describes what action is being executed that manipulates the data in a certain way. The payload property is data that is being passed into that action. 
    * actions are “dispatched” or passed into the reducer function as an argument
    * when the reducer receives the action it will update the state according to the type and payload properties of the action

 Reducers- pure function that allows us to manage state in a predictable manner. 
 Reducer function takes in 2 arguments, current state and action. Then, it returns new updated state object based on both arguments. Reducers allow us to manage changes in state of application, while maintain immutability and predictability in our components 
 
 Store- holds all of our state/data that being used in our app that’s why it is referred to as the ‘single source of truth’ in a redux application. Everything that changes within the application is represented by a javascript object known as store


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used  for managing global data/state.
Component state is used for managing local data/state. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that provides the ability to handle asynchronous operations inside our action creators. It makes the reducer flow become asynchronous and make API calls from our action creators. 

	-will intercept action creator and check to see if that action is an object or a function
	If it’s object it forwards the action to the reducer untouched.
	If it’s a function—then it will stop that action from being forwarded to the reducer—to avoid errors in the reducer. 

	Thunk middleware function will call that action(function)/thunk  into the dispatch function so that the action can now be recognized as an object through dispatch


1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API was my favorite, I thought that the steps were pretty straightforward in how the state was managed and rendered. Even though for this sprint, redux is being used since the sprint is similar to the redux projects we have worked on earlier this week. 

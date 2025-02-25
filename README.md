# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Assessment Section-B Answer

1. What is JSX in React?
a) A syntax extension for JavaScript
b) A template engine
c) A CSS preprocessor
d) None of the above
Answer: (a)

2. Which method is used to update state in functional components?
a) setState()
b) updateState()
c) useState()
d) changeState()
Answer: (c)

3. What is the correct way to pass data to a child component?
a) Using state
b) Using props
c) Using functions
d) None of the above
Answer: (b)

4. What hook is used to fetch data in React?
a) useState
b) useEffect
c) useRef
d) useContext
Answer: (b)

5. How can you handle errors in Axios?
a) Using try-catch
b) Using .catch() method
c) Both a and b
d) None of the above
Answer: (c)

6. What is the purpose of React Fragments?
a) To wrap multiple elements without adding extra DOM nodes
b) To add comments in JSX
c) To create reusable components
d) None of the above
Answer: (a)

7. How do you create a protected route in React Router?
a) By using a conditional check inside a component
b) By using a higher-order component
c) Both a and b
d) None of the above
Answer: (a)

8. Which hook is used for referencing DOM elements?
a) useEffect
b) useState
c) useRef
d) useContext
Answer: (c)

9. What does the useContext hook do?
a) Creates a global state
b) Provides context values to components
c) Fetches data
d) None of the above
Answer: (b)

10. How do you handle forms in React?
a) Using controlled components
b) Using uncontrolled components
c) Both a and b
d) None of the above
Answer: (c)

Section D: Short Answer Questions (10 )

1. Explain the difference between functional and class components.
Answer: the difference between functional and class components are as follow:
    CC: In class component the lifecyle method is present,
        It has its own 'this',
        It have a render() method,
        In it we can create only one state,
        It is also known as statefull component.

    FF: In previous time functional component is only used for designing purpose in react,
        but after the ES6 version it is more useful component then class component,
        It is a stateless component,
        It does not provide constructor like class component,
        we can create multiple state in it,
        In this we can use multiple hooks reguarding to our terms & conditions.

2. What is conditional rendering in React? Provide an example.
Answer: Conditional Rendering is a method in which we can render the output on ui as per our own condition. it include mainly four type:
    1) Ternary operator
    2) if, else condition
    3) logical operator
    4) Early view

3. How does useEffect help in API calls?
Answer: It mainly use in API calls because it stop the re-rendering of api call again and again when the other functions hit by user.

4. What is the significance of React Portals?
Answer: React Portals is basically the another root by which we can deliver the component on ui without using the predefined root of react or we can say react portal also a method to send component data through new root.

5. Explain how React Router handles dynamic routing.
Answer: React Router handles dynamic routing by the placeholder path if that path match to any component path if not match to any path then it shows undefined path error.when the path match to any component then the data of that component will render on ui of browser.

6. What are Error Boundaries, and why are they used?
Answer: Error Boundaries is a method by which we can change the state of component by which we can save the whole app by getting crashed.
In Error Boundaries we have two method:

1) getDerivedStateFromError(): if we want to know the error then we can use this method and change the state also by using this.

2)componentDidCatch():

7. How does the useRef hook help in managing focus?
Answer: useRef hook is used to manipulate dom, By passing the variable of useRef into the field in which we want to focus on.

9. How does React handle form validation?
Answer: In React handling form validation is based on condition given in onSubmit handler if the condition match it allows the input field data else shows error or instruction for specific input field.

10. Explain how Axios helps in making API requests in React.
Answer: In Axios we can fetch data and data is in normal format we do not have to convert the recieved data into normal format its already converted by axios.  
# Props, onClick, and onChange

## Handling onClick and onChange Events in React Components

In React.js, handling user interactions like clicking a button or changing input values involves utilizing event handlers. The example below creates a simple LoginForm component that has an event handler: `handleSubmit`.

Create a LoginForm component in your src folder and type in the following code.

### Creating Functions within a Component

Within a React component, you can define functions that respond to these events. For instance:

```javascript
// LoginForm component that takes onSubmit as a prop (We will discuss below.)
function LoginForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        // Gets the value in the name field.
        const name = event.target.name.value;
        // Passes the name to the parent component
        props.onSubmit(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" name="name" />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
```

## Understanding Props in React

Props (short for properties) are a way to pass data from one component to another in React. They are like parameters for a function or arguments for a method. These props can contain any kind of data: strings, numbers, arrays, objects, functions, etc.

```javascript
// Greeting component that receives a 'name' prop
const Greeting = (props) => {
    return (
        <div>
            <h2>Hello, {props.name}!</h2>
            <p>Welcome to our website.</p>
        </div>
    );
};

// ParentComponent passing a 'name' prop to Greeting
function ParentComponent() {
    return (
        <div>
            <Greeting name="Alice" />
        </div>
    );
}
```

We are passing name as a prop to Greeting. In the above example, name has a value of "Alice". On your browser, it will render the Greeting component as `Hello, Alice! Welcome to our website.`

## Putting it all together

We may want to ask the user for their name through a login form and use that input as our prop for the Greeting component.

In your src folder, create a Greeting component like follows:

```javascript
function Greeting(props) {
    return (
        <div>
            <h2>Hello, {props.name}!</h2>
            <p>Welcome to our website.</p>
        </div>
    );
}

export default Greeting;
```

Finally, we need to pass the name from the LoginForm component to the Greeting component. However, this is not as easy as just calling the Greeting component in the LoginForm.

Revist your LoginForm component which takes in a onSubmit function as a prop. (Remember that functions can be passed as parameters!)

This onSubmit function actually comes from another component. Let's say it is the App.js. Modify your App.js as follows and add in the LoginForm component. We want the Greeting component to get attached to the screen ONLY when the user presses the submit of the form.

Can you think of a possible way you could do this? Hint: You will need a conditional statement.

```javascript
import LoginForm from "./LoginForm";
import Greeting from "./Greeting";
function App() {
    return (
        <div className="App">
            {/* Comment out last class code*/}

            {/* <h1>Hello React!</h1>
            <MyComponent />
            <MyComponent />
            <MyComponent /> */}

            <LoginForm />
            <Greeting />
        </div>
    );
}

export default App;
```

## Storing Variables

You might have thought of keeping a variable (Maybe a boolean variable) that is either true or false to indicate whether the user has submitted the form or not.

For example, in the following code, I created a boolean submitted, a String userName, and a function handleOnSubmit. The submitted is initally false as the user has not logged in yet. The userName is blank by default, and the handleOnSubmit is passed as a prop to LoginForm, which means that it is only called when the user submits the form.

Another thing I added is the ternary operator, which if you remember is a simplified if/else statement. This is because you cannot have if/else in conjunction with HTML.

Ternary if you forgot has this syntax: `condition ? statement to run if the condition is true : statement to run if the condition is false`

```javascript
import LoginForm from "./LoginForm";
import Greeting from "./Greeting";
function App() {
    let submitted = false;
    let userName = "";

    function handleOnSubmit(name) {
        submitted = true;
        userName = name;
        console.log(submitted);
    }

    return (
        <div className="App">
            {/* Comment out last class code*/}

            {/* <h1>Hello React!</h1>
            <MyComponent />
            <MyComponent />
            <MyComponent /> */}

            {
                // I will use a ternary operator! What this is saying is: If submitted is false, display the LoginForm. Else display the Greeting.
                !submitted ? (
                    <LoginForm onSubmit={handleOnSubmit} />
                ) : (
                    <Greeting name={userName} />
                )
            }
        </div>
    );
}

export default App;
```

### Rip it didn't work...

Why didn't our plan work as intended! If you pull up the inspect elements, you should see that when you console.log submitted, it did indeed change to true!

What happened is that our variable changed, but we need to refresh the page to have the new change reflected. However, refresh is not quite the right word. Instead we want React to re-render the page!

Well then, how do we get React to re-render the page?

## States

We want to keep track of the submitted variable but unfortunatly a simple variable is not enough. We need states.

Instead of creating variables, we can use React hooks:

```javascript
let [submitted, setSubmitted] = useState(false);
let [userName, setUserName] = useState("");
```

This is a complex topic that we will dive more into tomorrow. As for today, copy the below code into your App.js.

```javascript
import LoginForm from "./LoginForm";
import Greeting from "./Greeting";
import React, { useState } from "react";

function App() {
    let [submitted, setSubmitted] = useState(false);
    let [userName, setUserName] = useState("");

    function handleOnSubmit(name) {
        setSubmitted(true);
        setUserName(name);
        console.log(submitted);
    }

    return (
        <div className="App">
            {/* Comment out last class code*/}

            {/* <h1>Hello React!</h1>
            <MyComponent />
            <MyComponent />
            <MyComponent /> */}

            {
                // I will use a ternary operator! What this is saying is: If submitted is false, display the LoginForm. Else display the Greeting.
                !submitted ? (
                    <LoginForm onSubmit={handleOnSubmit} />
                ) : (
                    <Greeting name={userName} />
                )
            }
        </div>
    );
}

export default App;
```

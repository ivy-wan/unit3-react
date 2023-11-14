# Understanding Components in React.js

### Explaining the Folder Structure:

Before we go further, let's take a look at the folder structure of our React project.

-   **node_modules:** Contains all required libraries and packages for the React project. If you decide to put your project onto Github, you want to make sure this folder is in your git-ignore!
-   **public:** Holds static files like HTML, CSS, favicon, etc., served to the browser.
-   **src (Source):** Main development folder for components, styles, and JavaScript files.
-   **package-lock.json:** Keeps track of exact dependency versions.

### What is a Component in React.js?

-   A component in React.js is a reusable piece of code that represents a part of the user interface (UI). For example, when you are building a webpage, there are aspects of the code that tend to appear multiple times.

-   You can think of components as having the same purpose as functions! Functions and components are both good for code resuability.

-   Components come in two types, Class components and Function components. In this class we will concentrate on the Function components!

## Explaining App.js:

App.js is the root component! It is the starting point of your project. Let's take a look at each line in this file.

```javascript
// Importing the React library, necessary for creating React components
import React from "react";

// Importing the CSS file for styling the App component. If you look inside App.css, you will see that React starts you out with some default styling.
import "./App.css";

// Defining the functional component named App
function App() {
    // Returns a JSX expression representing the UI of the App component. Every component must return a JSX expression. The JSX looks a lot like HTML! That is because JSX allows writing HTML-like code within the JavaScript.
    return (
        // JSX structure starts here, enclosed within parentheses
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
        // Closing div tag
    );
    // Closing parentheses for the return statement
}

// Exporting the App component to be used in other files
export default App;
```

### Let's modify the App.js component!

Delete all the JSX within the parentheses of the return. We will return our own JSX expression.

```javascript
function App() {
    return (
        // NEW CODE
        <div className="App">
            <h1>Hello, React!</h1>
            <p>This is a basic React component.</p>
        </div>
    );
}
```

### Steps to Run a React Project

1. **Start the development server:**
    - Run the command `npm start`.
    - This command will start the development server and automatically open the React application in your default web browser.
2. **View the React App:**
    - After executing npm start, a new tab or window should open in your web browser displaying your React application.
    - If it doesn't open automatically, you can manually visit http://localhost:3000 in your web browser to view the running React application.

**Additional Notes:**
While the development server is running (npm start), you can continue to work on your React project. Any changes made to the code will be reflected in the browser after saving the files.
Remember to keep the terminal window open while developing to keep the development server running.

#### Stopping the Development Server:

-   To stop the development server and terminate the running React application:

-   In the terminal or command prompt, press Ctrl + C.
    You'll be prompted to confirm terminating the process. Press Y and then Enter to stop the server.

# Step-by-Step Guide to Creating a Component in React

Follow these steps to create a new component in a React.js project:

1. **Create a New Component File:**

    - Navigate to the `src` directory within your React project.
    - Create a new file for your component (e.g., `MyComponent.js`).

2. **Write the Component Code:**

    - Inside the newly created file, define your React component using a functional approach.
    - For a functional component:

        ```javascript
        import React from "react";

        function MyComponent() {
            return (
                <div>
                    <h1>My name is [Your name]</h1>
                </div>
            );
        }

        export default MyComponent;
        ```

        While we will not be going over the class-based component, here is a snipet of the class-based approach if you are curious:

        ```javascript
        import React, { Component } from "react";

        class MyComponent extends Component {
            render() {
                return (
                    <div>
                        <h1>My name is [Your name]</h1>
                    </div>
                );
            }
        }

        export default MyComponent;
        ```

3. **Export the Component:**

    - At the end of the file, export your component using `export default MyComponent;`.
    - This allows other files within your project to import and use the component.

4. **Use the Component in Other Files (e.g., App.js):**
    - Import your newly created component into the file where you want to use it.
    - In the file (e.g., `App.js`), import the component at the top:
        ```javascript
        import MyComponent from "./MyComponent";
        ```
    - Then, within the JSX code where you want to use the component, insert it using its name as a JSX element:
        ```javascript
        function App() {
            return (
                <div>
                    <h1>Welcome to My App</h1>
                    <MyComponent />
                </div>
            );
        }
        ```
    - This will render your `MyComponent` within the `App` component. This is super cool!

By following these steps, you can create reusable components in React and use them within your application's structure.

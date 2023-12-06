import React from "react";
import LoginForm from "./LoginForm";
import Counter from "./Counter";

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
            <Counter />
        </div>
    );
}

export default App;

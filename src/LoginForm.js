function LoginForm(props) {
    function handleSubmit(event) {
        // Gets the name the user inputed
        const name = event.target.name.value;
        props.onSubmit(name);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your name"
                name="name"
            ></input>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;

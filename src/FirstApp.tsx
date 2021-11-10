const FirstApp = ({message = "Default message"}) => {

    const greeting = 'Hello World';

    return (
        <>
            <h1>{greeting}</h1>
            <p>{message}</p>
        </>
    );
}

export default FirstApp;
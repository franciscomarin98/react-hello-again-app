import PropTypes from "prop-types";

const FirstApp = ({title, message}) => {

    return (
        <>
            <h1>{title}</h1>
            <p>{message}</p>
        </>
    );
}

FirstApp.protoTypes = {
    message: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: "Default title property"
}

export default FirstApp;
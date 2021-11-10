import PropTypes from "prop-types";
import {useState} from "react";

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(0);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <div className={"counter"}>
                <h1>CounterApp</h1>
                <h2> {counter} </h2>
                <div className="counter-buttons">
                    <button onClick={handleIncrement}>+1</button>
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={handleDecrement}>-1</button>
                </div>
            </div>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
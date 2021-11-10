import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";

import "./index.css";
// import FirstApp from "./FirstApp";

// ReactDOM.render(<FirstApp message={'My first app again'}/>, document.querySelector('#root'));
ReactDOM.render(<CounterApp value={0}/>, document.querySelector('#root'));



import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "../../styles/Sconds.scss";

function SecondsCounter(props) {
	//    variable que se modifica , quien la modifica = valor inicial
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const time = setInterval(() => {
			setSeconds(c => c + 1);
		}, props.n);
	}, []);
	// condicion para reinicio de contador
	if (seconds == 10) {
		clearInterval(seconds);
		setSeconds(0);
	}
	return (
		<div className="boxnumber">
			<div className="digit">{seconds}</div>
		</div>
	);
}

// uses propTypes
SecondsCounter.propTypes = {
	n: PropTypes.number
};
export default SecondsCounter;

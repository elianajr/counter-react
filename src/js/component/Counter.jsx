import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (props.isRunning) {
				if (counter < 9) {
					setCounter(counter + 1);
				} else {
					setCounter(0);
				}
			}
		}, props.time);
		return () => clearInterval(interval);
	}, [counter, props.isRunning]);

	useEffect(() => {
		setCounter(0);
	}, [props.isReset]);

	return (
		<div>
			<span>{counter}</span>
		</div>
	);
};

Counter.propTypes = {
	time: PropTypes.number,
	isRunning: PropTypes.bool,
	isReset: PropTypes.number
};

export default Counter;

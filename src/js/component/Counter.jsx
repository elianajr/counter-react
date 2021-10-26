import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log(counter);
			if (counter < 9) {
				setCounter(counter + 1);
			} else {
				setCounter(0);
			}
		}, props.time);
		return () => clearInterval(interval);
	}, [counter]);

	return (
		<div>
			<span>{counter}</span>
		</div>
	);
};

Counter.propTypes = {
	time: PropTypes.number
};

export default Counter;

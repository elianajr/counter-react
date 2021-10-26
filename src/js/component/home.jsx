import React from "react";
import Counter from "./Counter.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div class="timer">
			<Counter time="1000" />
			<Counter time="10000" />
			<Counter time="100000" />
			<Counter time="1000000" />
		</div>
	);
};

export default Home;

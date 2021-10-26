import React from "react";
import Counter from "./Counter.jsx";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="text">
				<Counter className="item1" time="1000000" />
				<Counter className="item2" time="100000" />
				<Counter className="item3" time="10000" />
				<Counter className="item4" time="1000" />
			</div>
		</div>
	);
};

export default Home;

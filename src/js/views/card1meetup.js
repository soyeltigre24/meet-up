import React from "react";
import { Link } from "react-router-dom";
import Page1 from "./cardpage1";

const Card1 = () => {
	return (
		<div className="card" style={{ width: "40%", margin: "auto" }}>
			<div className="card-header d-flex justify-content-start " style={{ fontSize: "30px" }}>
				April 28
			</div>
			<div className="card-body">
				<div style={{ fontSize: "25px", paddingRight: "380px" }}> 7:00 am </div>
				<Link to="/page1">
					<p style={{ fontSize: "20px", color: "blue" }}>5th event for meetup 1</p>
				</Link>
			</div>
		</div>
	);
};
export default Card1;

import React from "react";
import { useHistory } from "react-router-dom";

const Page1 = () => {
	const history = useHistory();
	return (
		<div className="jumbotron" style={{ background: "grey" }}>
			<h1 className="display-4">The Meetup Clone</h1>
			<p className="lead">
				This is a mini project created by <div style={{ color: "blue" }}>4 geeks Academy </div>
			</p>

			<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
					<p onClick={() => history.push("/")}>Go back home </p>
				</a>
			</p>
		</div>
	);
};
export default Page1;

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Jumbo from "./Jumbo";
import Card1 from "./card1meetup";
import Card2 from "./card2meetup";
import Card3 from "./card3meetup";
import Card4 from "./cardmeetup4";
import Card5 from "./card5meetup";

export const Home = () => (
	<div className="text-center mt-5">
		<Jumbo />
		<div>
			<Card1 />
		</div>
		<br />
		<div>
			<Card2 />
		</div>
		<br />
		<div>
			<Card3 />
		</div>
		<br />
		<div>
			<Card4 />
		</div>
		<br />
		<div>
			<Card5 />
		</div>
	</div>
);

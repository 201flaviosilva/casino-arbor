import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to={"/"}>
						<span>Home</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

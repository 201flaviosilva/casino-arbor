import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	position: fixed;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
`;

export default function Footer() {
	return (
		<StyledFooter>
			<p>Footer</p>
		</StyledFooter>
	);
}

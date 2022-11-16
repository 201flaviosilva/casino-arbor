import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
	width: 100vw;
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default function Header() {
	return (
		<StyledHeader>
			<h1>Arbor</h1>
		</StyledHeader>
	);
}

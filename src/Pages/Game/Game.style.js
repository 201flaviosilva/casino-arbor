import styled from "styled-components";

export const GameContainer = styled.div`
	margin: 36px 0 20px; // 36px from the header and 20px from the footer
 	display: grid;
  place-content: center;
`;

export const ButtonIcon = styled.button`
	position: fixed;
	top: 50%;
	${({ position }) => position + ": 10px"};
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	background: black;
	color: white;
	border: 1px solid red;
	border-radius: 6px;
	opacity: 0.75;
	transition: 0.5s;

	&:hover {
		opacity: 1;
		background: white;
		color: black;
		border: 1px solid green;
		scale: 1.1;
	}

	&:active {
		scale: 1.05;
	}
`;

import React from "react";
import { ImStatsBars } from "react-icons/im";
import { MdChevronLeft } from "react-icons/md";

import { GameContainer, ButtonIcon } from "./Game.style";
import Tree from "./Components/Tree";

export default function Game() {
	return (
		<GameContainer>
			<ButtonIcon position={"left"}>
				<ImStatsBars size={25} />
			</ButtonIcon>

			<Tree />

			<ButtonIcon position={"right"}>
				<MdChevronLeft size={25} />
			</ButtonIcon>
		</GameContainer>
	);
}

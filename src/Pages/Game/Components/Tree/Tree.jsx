import React from "react";
import { GiBonsaiTree } from "react-icons/gi";

import { TreeContainer } from "./Tree.style";

export default function Game() {
	return (
		<TreeContainer>
			<GiBonsaiTree size={1000} />
		</TreeContainer>
	);
}

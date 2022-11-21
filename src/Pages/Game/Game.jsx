import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { GiUpgrade, GiSettingsKnobs } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
import { IoMdHelpBuoy } from "react-icons/io";

import ButtonIcon from "../../Components/ButtonIcon";

import styles from "./Game.module.css";
import Tree from "./Components/Tree";
import Upgrade from "./Components/Upgrade";

const MODAL_NAMES = {
	upgrade: "Upgrade",
};

const ICON_SIZE = 25;

export default function Game() {
	const [modal, setModal] = useState(null);

	return (
		<>
			<div className={styles.gameContainer}>
				<Tree />
				<ActionsPanel setModal={setModal} />
			</div>

			{modal === MODAL_NAMES.upgrade && <Upgrade setModal={setModal} />}
		</>
	);
}

function ActionsPanel({ setModal }) {
	return (
		<aside className={styles.actionsPanel}>
			<ButtonIcon onClick={() => setModal(MODAL_NAMES.upgrade)}>
				<GiUpgrade size={ICON_SIZE} />
			</ButtonIcon>
			<ButtonIcon>
				<ImStatsBars size={ICON_SIZE} />
			</ButtonIcon>
			<ButtonIcon>
				<GiSettingsKnobs size={ICON_SIZE} />
			</ButtonIcon>
			<ButtonIcon>
				<a href="https://github.com/201flaviosilva/arbor" target="_blank" rel="noreferrer">
					<AiFillGithub size={ICON_SIZE} />
				</a>
			</ButtonIcon>
			<ButtonIcon>
				<IoMdHelpBuoy size={ICON_SIZE} />
			</ButtonIcon>
		</aside>
	);
}

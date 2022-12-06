import React, { useState } from "react";
import { AiFillGithub, AiOutlineThunderbolt } from "react-icons/ai";
import { GiUpgrade, GiSettingsKnobs, GiFamilyTree, GiTwoCoins } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
import { IoMdHelpBuoy } from "react-icons/io";

import ButtonIcon from "../../Components/ButtonIcon";
import { useUserState } from "../../Context/User/UserState";
import TreeSateStateProvider from "../../Context/Tree/TreeState";
import { useTreeState } from "../../Context/Tree/TreeState";
import { getCurrentLevel } from "../../Context/Tree/levels";

import styles from "./Home.module.css";
import Tree from "./Components/Tree";
import Upgrade from "./Components/Upgrade";
import LevelStatusFooter from "./Components/LevelStatusFooter";

const MODAL_NAMES = {
	upgrade: "Upgrade",
	stats: "Stats",
	evolutionTree: "EvolutionTree",
	settings: "Settings",
	help: "Help",
};

const ICON_SIZE = 25;

export default function Home() {
	const [modal, setModal] = useState(null);

	return (
		<TreeSateStateProvider>
			<div className={styles.homeContainer}>
				<Status />
				<Tree />
				<ActionsPanel setModal={setModal} />
				<LevelStatusFooter />
			</div>

			{modal === MODAL_NAMES.upgrade && <Upgrade setModal={setModal} />}
		</TreeSateStateProvider>
	);
}

function Status() {
	const { userSate } = useUserState();
	const { treeSate } = useTreeState();

	return (
		<div className={styles.status}>
			<p>
				<span><GiTwoCoins size={ICON_SIZE} /></span>
				<span>{userSate.coins}</span>
			</p>
			<p>
				<span><AiOutlineThunderbolt size={ICON_SIZE} /></span>
				<span>{getCurrentLevel(treeSate.experience)}</span>
			</p>
		</div>
	);
}

function ActionsPanel({ setModal }) {
	return (
		<aside className={styles.actionsPanel}>
			{/* Upgrade */}
			<ButtonIcon onClick={() => setModal(MODAL_NAMES.upgrade)} title="Upgrade">
				<GiUpgrade size={ICON_SIZE} />
			</ButtonIcon>

			{/* Stats */}
			<ButtonIcon title="Stats">
				<ImStatsBars size={ICON_SIZE} />
			</ButtonIcon>

			{/* Evolution Tree */}
			<ButtonIcon title="Evolution Tree">
				<GiFamilyTree size={ICON_SIZE} />
			</ButtonIcon>

			{/* Settings */}
			<ButtonIcon title="Settings">
				<GiSettingsKnobs size={ICON_SIZE} />
			</ButtonIcon>

			{/* GitHub */}
			<ButtonIcon title="GitHub">
				<a href="https://github.com/201flaviosilva/casino-arbor" target="_blank" rel="noreferrer">
					<AiFillGithub size={ICON_SIZE} />
				</a>
			</ButtonIcon>

			{/* Help */}
			<ButtonIcon title="Help">
				<IoMdHelpBuoy size={ICON_SIZE} />
			</ButtonIcon>
		</aside>
	);
}

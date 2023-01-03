import React, { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";

import { useUserState } from "../../Context/User/UserState";
import TreeSateStateProvider from "../../Context/Tree/TreeState";
import { useTreeState } from "../../Context/Tree/TreeState";
import { getCurrentLevel } from "../../Context/Tree/levels";

import Modal from "../../Components/Modal";

import styles from "./Home.module.css";

import ActionsPanel from "./Components/Panels/ActionsPanel";
import GamesPanel from "./Components/Panels/GamesPanel";
import LevelStatusFooter from "./Components/LevelStatusFooter";
import Tree from "./Components/Tree";

// Actions Modals
import Upgrade from "./Components/Upgrade";

// Games Modals
import GuessTheNumber from "./Games/GuessTheNumber";

const MODAL_NAMES = {
	// Actions
	upgrade: "Upgrade",
	stats: "Stats",
	evolutionTree: "EvolutionTree",
	settings: "Settings",
	help: "Help",

	// Games
	guessTheNumber: "GuessTheNumber",
};

const ICON_SIZE = 25;

export default function Home() {
	const [modal, setModal] = useState(null);

	return (
		<TreeSateStateProvider>
			<div className={styles.homeContainer}>
				<Status />
				<Tree />
				<ActionsPanel setModal={setModal} MODAL_NAMES={MODAL_NAMES} />
				<GamesPanel setModal={setModal} MODAL_NAMES={MODAL_NAMES} />
				<LevelStatusFooter />
			</div>

			{modal && <Modal setIsOpen={setModal} title={modal}>
				{modal === MODAL_NAMES.upgrade && <Upgrade />}
				{modal === MODAL_NAMES.guessTheNumber && <GuessTheNumber />}
			</Modal>}
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


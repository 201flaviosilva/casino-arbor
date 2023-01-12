import React, { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";

import { useUserState } from "../../Context/User/UserState";
import TreeSateStateProvider from "../../Context/Tree/TreeState";
import { useTreeState } from "../../Context/Tree/TreeState";
import { getCurrentLevel } from "../../Context/Tree/levels";

import Modal from "../../Components/Modal";

import styles from "./Home.module.scss";

import ActionsPanel from "./Components/Panels/ActionsPanel";
import GamesPanel from "./Components/Panels/GamesPanel";
import LevelStatusFooter from "./Components/LevelStatusFooter";
import Tree from "./Components/Tree";

// Actions Modals
import Upgrade from "./Components/Upgrade";

// Games Modals
import GuessTheNumber from "./Games/GuessTheNumber";

import MODAL_NAMES from "./ModalNames";

const ICON_SIZE = 25;

export default function Home() {
	const [modal, setModal] = useState(null);

	return (
		<TreeSateStateProvider>
			<div className={styles.homeContainer}>
				<Status />
				<Tree />
				<ActionsPanel setModal={setModal} />
				<GamesPanel setModal={setModal} />
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
				<span className={styles.icon}><GiTwoCoins size={ICON_SIZE} /></span>
				<span>{userSate.coins}</span>
			</p>
			<p>
				<span className={styles.icon}><AiOutlineThunderbolt size={ICON_SIZE} /></span>
				<span>{getCurrentLevel(treeSate.experience)}</span>
			</p>
		</div>
	);
}


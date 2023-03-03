import React, { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import Modal from "../../Components/Modal";
import { getCurrentLevel } from "../../Context/Tree/levels";
import TreeSateStateProvider, { useTreeState } from "../../Context/Tree/TreeState";
import { useUserState } from "../../Context/User/UserState";
import LevelStatusFooter from "./Components/LevelStatusFooter";
import ActionsPanel from "./Components/Panels/ActionsPanel";
import GamesPanel from "./Components/Panels/GamesPanel";
import Tree from "./Components/Tree";
import Upgrade from "./Components/Upgrade";
import GuessTheNumber from "./Games/GuessTheNumber";
import styles from "./Home.module.scss";
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


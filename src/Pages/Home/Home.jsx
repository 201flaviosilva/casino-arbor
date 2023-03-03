import React, { useState } from "react";
import Modal from "../../Components/Modal";
import TreeSateStateProvider from "../../Context/Tree/TreeState";
import LevelStatusFooter from "./Components/LevelStatusFooter";
import ActionsPanel from "./Components/Panels/ActionsPanel";
import GamesPanel from "./Components/Panels/GamesPanel";
import Status from "./Components/Status";
import Tree from "./Components/Tree";
import Upgrade from "./Components/Upgrade";
import CoinFlip from "./Games/CoinFlip";
import GuessTheNumber from "./Games/GuessTheNumber";
import styles from "./Home.module.scss";
import MODAL_NAMES from "./ModalNames";

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

			{
				modal && <Modal setIsOpen={setModal} title={modal}>
					{modal === MODAL_NAMES.upgrade && <Upgrade />}
					{modal === MODAL_NAMES.guessTheNumber && <GuessTheNumber />}
					{modal === MODAL_NAMES.coinFlip && <CoinFlip />}
				</Modal>
			}

		</TreeSateStateProvider>
	);
}


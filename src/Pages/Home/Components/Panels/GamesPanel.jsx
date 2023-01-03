import React from "react";
import { GiWizardFace } from "react-icons/gi";

import ButtonIcon from "../../../../Components/ButtonIcon";

import styles from "./Panels.module.css";

const ICON_SIZE = 25;

export default function GamesPanel({ setModal, MODAL_NAMES }) {
	return (
		<aside className={`${styles.basePanel} ${styles.gamePanel}`}>
			<h2 className={styles.title}>Games</h2>

			<div className={styles.buttonsContainer}>
				{/* Guess The Number */}
				<ButtonIcon onClick={() => setModal(MODAL_NAMES.guessTheNumber)} title="Guess The Number">
					<GiWizardFace size={ICON_SIZE} />
				</ButtonIcon>
			</div>
		</aside>
	);
}

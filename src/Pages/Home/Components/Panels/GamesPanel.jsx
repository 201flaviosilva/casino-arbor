import React from "react";
import { GiCoinflip, GiWizardFace } from "react-icons/gi";
import ButtonIcon from "../../../../Components/ButtonIcon";
import MODAL_NAMES from "../../ModalNames";
import styles from "./Panels.module.css";

const ICON_SIZE = 25;

export default function GamesPanel({ setModal }) {
	return (
		<aside className={`${styles.basePanel} ${styles.gamePanel}`}>
			<h2 className={styles.title}>Games</h2>

			<div className={styles.buttonsContainer}>
				{/* Guess The Number */}
				<ButtonIcon onClick={() => setModal(MODAL_NAMES.guessTheNumber)} title="Guess The Number">
					<GiWizardFace size={ICON_SIZE} />
				</ButtonIcon>

				{/* Coin Flip */}
				<ButtonIcon onClick={() => setModal(MODAL_NAMES.coinFlip)} title="Coin Flip">
					<GiCoinflip size={ICON_SIZE} />
				</ButtonIcon>
			</div>
		</aside>
	);
}

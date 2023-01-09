import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GiUpgrade, GiSettingsKnobs, GiFamilyTree } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
import { IoMdHelpBuoy } from "react-icons/io";

import ButtonIcon from "../../../../Components/ButtonIcon";

import MODAL_NAMES from "../../ModalNames";

import styles from "./Panels.module.css";

const ICON_SIZE = 25;

export default function ActionsPanel({ setModal }) {
	return (
		<aside className={`${styles.basePanel} ${styles.actionsPanel}`}>
			<h2 className={styles.title}>Actions</h2>

			<div className={styles.buttonsContainer}>
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
			</div>
		</aside>
	);
}

import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import { useTreeState } from "../../../../Context/Tree/TreeState";
import { getCurrentExperienceLevel, getNextExperienceLevel } from "../../../../Context/Tree/levels";

import styles from "./LevelStatusFooter.module.css";

export default function LevelStatusFooter() {
	const { treeSate } = useTreeState();
	// console.log(treeSate, getCurrentExperienceLevel(treeSate.experience), getNextExperienceLevel(treeSate.experience));

	return (
		<div className={styles.container}>
			<div>
				<ProgressBar completed={`${getCurrentExperienceLevel(treeSate.experience)}`} maxCompleted={getNextExperienceLevel(treeSate.experience)} />
			</div>
		</div>
	)
}

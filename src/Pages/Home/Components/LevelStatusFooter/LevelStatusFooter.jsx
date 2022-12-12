import React, { useState, useEffect } from "react";

import { useTreeState } from "../../../../Context/Tree/TreeState";
import { getCurrentExperienceLevel, getNextExperienceLevel, getCurrentLevel } from "../../../../Context/Tree/levels";
import ProgressBar from "../../../../Components/ProgressBar";

import styles from "./LevelStatusFooter.module.css";

export default function LevelStatusFooter() {
	const { treeSate } = useTreeState();
	const [lastLevel, setLastLevel] = useState(-1);

	useEffect(() => {
		const currentLevel = getCurrentLevel(treeSate.experience);

		if (lastLevel !== currentLevel) {
			setLastLevel(currentLevel);
		}

	}, [treeSate.experience]);


	return (
		<div className={styles.container}>
			<ProgressBar
				current={`${getCurrentExperienceLevel(treeSate.experience)}`}
				end={getNextExperienceLevel(treeSate.experience)}
			/>
		</div>
	)
}

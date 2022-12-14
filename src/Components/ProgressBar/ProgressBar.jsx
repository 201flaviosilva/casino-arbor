import React from "react";

import styles from "./ProgressBar.module.css";

export default function ProgressBar({ start = 0, current, end }) {
	const percentage = Math.floor(current / end * 100) + "%";

	return (
		<div className={styles.wrapper} title={`${percentage}`}>
			<div className={styles.bar} style={{ width: percentage, }}></div>

			<span className={styles.text}>{start}</span>
			<span className={styles.text}>{current}</span>
			<span className={styles.text}>{end}</span>
		</div>
	);
}

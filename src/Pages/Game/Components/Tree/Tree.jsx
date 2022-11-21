import React from "react";
import { GiBonsaiTree } from "react-icons/gi";

import styles from "./Tree.module.css";

export default function Game() {
	return (
		<div className={styles.treeContainer}>
			<GiBonsaiTree size={1000} />
		</div>
	);
}

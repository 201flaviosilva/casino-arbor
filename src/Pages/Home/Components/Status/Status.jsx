import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import { getCurrentLevel } from "../../../../Context/Tree/levels";
import { useTreeState } from "../../../../Context/Tree/TreeState";
import { useUserState } from "../../../../Context/User/UserState";
import styles from "./Status.module.scss";

const ICON_SIZE = 25;

export default function Status() {
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

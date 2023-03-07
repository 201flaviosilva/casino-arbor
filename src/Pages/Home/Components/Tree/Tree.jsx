import React from "react";
import { GiBonsaiTree, GiFruitTree, GiPalmTree, GiPineTree, GiTreehouse } from "react-icons/gi";
import { TbTree } from "react-icons/tb";
import { getCurrentLevel } from "../../../../Context/Tree/levels";
import { useTreeState } from "../../../../Context/Tree/TreeState";
import styles from "./Tree.module.scss";

export default function Game() {
	const { treeSate } = useTreeState();
	return (
		<div className={styles.treeContainer}>
			<Icon level={getCurrentLevel(treeSate.experience)} />
		</div>
	);
}

function Icon({ level }) {
	if (level < 5) return <GiBonsaiTree />;
	if (level < 10) return <GiPalmTree />;
	if (level < 15) return <TbTree />;
	if (level < 20) return <GiPineTree />;
	if (level < 25) return <GiTreehouse />;
	else return <GiFruitTree />;
}

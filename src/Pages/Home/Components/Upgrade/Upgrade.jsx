import React from "react";
import { GoArrowUp, GoCheck } from "react-icons/go";
import ButtonIcon from "../../../../Components/ButtonIcon";

import styles from "./Upgrade.module.css";

export default function Upgrade() {
	function onConfirm() {
		alert("Confirmed");
	}

	return (
		<>
			<UpgradeElement label="Coin per hour" />
			<UpgradeElement label="Dropping fruits" />

			<button onClick={onConfirm}>
				<span>Confirm</span>
				<GoCheck size={25} />
			</button>
		</>
	);
}

function UpgradeElement({ label }) {
	return (
		<div>
			{label && <label>{label}</label>}

			<ButtonIcon>
				<GoArrowUp size={25} />
			</ButtonIcon>
		</div>
	);
}

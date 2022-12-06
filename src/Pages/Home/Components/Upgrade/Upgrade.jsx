import React from "react";
import { GoArrowDown, GoArrowUp, GoCheck } from "react-icons/go";
import ButtonIcon from "../../../../Components/ButtonIcon";

import Modal from "../../../../Components/Modal";

import styles from "./Upgrade.module.css";

export default function Upgrade({ setModal }) {
	function onConfirm() {
		alert("Confirmed");
	}

	return (
		<Modal setIsOpen={setModal} title="Upgrade">
			<UpgradeElement label="Coin per hour" />
			<UpgradeElement label="Dropping fruits" />

			<button onClick={onConfirm}>
				<span>Confirm</span>
				<GoCheck size={25} />
			</button>
		</Modal>
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

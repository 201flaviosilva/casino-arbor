import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { fibonacciUntil } from "201flaviosilva-utils";
import { BsEmojiNeutral, BsQuestion } from "react-icons/bs";
import { FaBaby } from "react-icons/fa";
import { GiMuscleUp, GiRun } from "react-icons/gi";
import { GoDash, GoPlus } from "react-icons/go";

import ButtonIcon from "../../../../Components/ButtonIcon";

import styles from "./GuessTheNumber.module.scss";

const AVAILABLE_VALUES = [...new Set(fibonacciUntil(1000))];
const ICON_SIZE = 25;
const WINDOWS = {
	menu: "Menu",
	game: "Game",
};

export default function GuessTheNumber() {
	const [currentWindow, setCurrentWindow] = useState(WINDOWS.menu);

	const [difficulty, setDifficulty] = useState("Normal");
	const [betValueIndex, setBetValueIndex] = useState(1);
	const [betValue, setBetValue] = useState(AVAILABLE_VALUES[betValueIndex]);


	useEffect(() => { setBetValue(AVAILABLE_VALUES[betValueIndex]); }, [betValue, betValueIndex]);

	switch (currentWindow) {
		case WINDOWS.menu:
			return (
				<Menu
					betValueIndex={betValueIndex}
					setBetValueIndex={setBetValueIndex}
					betValue={betValue}
					setCurrentWindow={setCurrentWindow}
					difficulty={difficulty}
					setDifficulty={setDifficulty}
				/>
			);

		default:
			Swal.fire({
				icon: "error",
				title: "Error!",
				text: "Something went wrong!",
			});
			break;
	}
}

function Menu({ betValueIndex, setBetValueIndex, betValue, setCurrentWindow, difficulty, setDifficulty }) {
	function help() {
		Swal.fire({
			icon: "info",
			title: "Help",
			text: "In this game you will try to find the hidden number",
		});
	}

	return (
		<div className={styles.menu}>
			<ButtonIcon className={styles.questionBTN} onClick={help} title="Help?"><BsQuestion size={ICON_SIZE} /></ButtonIcon>

			<div className={styles.difficultySelection} title="Select difficulty">
				<ButtonIcon
					onClick={() => setDifficulty("Easy")}
					title="Easy: 0-10"
					className={difficulty === "Easy" && styles.difficultyButtonSelected}>
					<BsEmojiNeutral size={ICON_SIZE} />
				</ButtonIcon>

				<ButtonIcon
					onClick={() => setDifficulty("Normal")}
					title="Normal: 0-100"
					className={difficulty === "Normal" && styles.difficultyButtonSelected}>
					<FaBaby size={ICON_SIZE} />
				</ButtonIcon>

				<ButtonIcon
					onClick={() => setDifficulty("Hard")}
					title="Hard: 0-100"
					className={difficulty === "Hard" && styles.difficultyButtonSelected}>
					<GiMuscleUp size={ICON_SIZE} />
				</ButtonIcon>
			</div>

			<div className={styles.betController} title="Place your bet">
				<ButtonIcon
					onClick={() => setBetValueIndex(prev => prev - 1)}
					disabled={betValueIndex === 1}>
					<GoDash size={ICON_SIZE} />
				</ButtonIcon>
				<span>{betValue}</span>
				<ButtonIcon
					onClick={() => setBetValueIndex(prev => prev + 1)}
					disabled={betValueIndex === AVAILABLE_VALUES.length - 1}>
					<GoPlus size={ICON_SIZE} />
				</ButtonIcon>
			</div>

			<ButtonIcon title="Play"><GiRun size={ICON_SIZE} /></ButtonIcon>
		</div>
	);
}

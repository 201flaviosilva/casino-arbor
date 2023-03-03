import { fibonacciUntil, randomInt } from "201flaviosilva-utils";
import { clamp } from "201flaviosilva-utils/src/Maths";
import React, { useCallback, useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { BsEmojiNeutral, BsQuestion } from "react-icons/bs";
import { FaBaby, FaRegHandPointDown, FaRegHandPointUp } from "react-icons/fa";
import { GiExitDoor, GiMuscleUp, GiRun } from "react-icons/gi";
import { GoArrowRight, GoCheck, GoDash, GoPlus } from "react-icons/go";
import Swal from "sweetalert2";
import ButtonIcon from "../../../../Components/ButtonIcon";
import Error from "../../../../Components/Error/Error";
import { SET_COINS } from "../../../../Context/User/Reducer";
import { useUserState } from "../../../../Context/User/UserState";
import styles from "./GuessTheNumber.module.scss";

const AVAILABLE_VALUES = [...new Set(fibonacciUntil(1000))];
const WIN_MULTIPLIER = [32, 16, 8, 4, 2, 1, 0.5, 0.25, 0.125];
const ICON_SIZE = 25;
const WINDOWS = {
	menu: "Menu",
	game: "Game",
};

const DIFFICULTY = {
	Easy: 10,
	Normal: 100,
	Hard: 1000,
};

const Toast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: toast => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	}
});

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

		case WINDOWS.game:
			return (<Game difficulty={difficulty} setCurrentWindow={setCurrentWindow} betValue={betValue} />);

		default:
			return <Error />;
	}
}

function Game({ difficulty, setCurrentWindow, betValue }) {
	const { userSate, dispatch } = useUserState();

	const [userNumber, setUserNumber] = useState(0);
	const [attemptsList, setAttemptsList] = useState([]);
	const [hideNumber, setHideNumber] = useState(0);
	const [isGameEnded, setIsGameEnded] = useState(false);

	const calcWinValue = useCallback(() =>
		WIN_MULTIPLIER[clamp(attemptsList.length, 0, WIN_MULTIPLIER.length - 1)] * betValue,
		[attemptsList.length, betValue]);

	const [winValue, setWinValue] = useState(calcWinValue());

	const maxNumber = DIFFICULTY[difficulty];

	useEffect(() => {
		setHideNumber(randomInt(maxNumber));
	}, [difficulty, maxNumber]);
	// useEffect(() => console.log(hideNumber), [hideNumber]); // Debug

	const calcPopUp = useCallback(() => {
		if (userNumber < hideNumber) Toast.fire({ icon: "info", title: "Hidden number is BIGGER" });
		else if (userNumber > hideNumber) Toast.fire({ icon: "info", title: "Hidden number is LOWER" });
		else Toast.fire({ icon: "success", title: "Nice one" });
	}, [hideNumber, userNumber]);

	const onExit = useCallback(() => setCurrentWindow(WINDOWS.menu), [setCurrentWindow]);

	const onSubmit = useCallback((event) => {
		event.preventDefault();
		if (isGameEnded) return;

		setAttemptsList([userNumber, ...attemptsList]);
		calcPopUp(userNumber);

		if (Number(userNumber) !== hideNumber) {
			setUserNumber(0);
			setWinValue(calcWinValue());
		} else {
			setIsGameEnded(true);
			dispatch({ type: SET_COINS, payload: userSate.coins + winValue });
			Swal.fire({
				icon: "success",
				title: `YOU WON ${winValue}`,
				text: `Nice you found the hidden number ${hideNumber}, and you won ${winValue}`,
				allowOutsideClick: false,
				confirmButtonText: "Back to Menu",
			}).then((result) => { if (result.isConfirmed) onExit(); });
		}

	}, [attemptsList, calcPopUp, calcWinValue, dispatch, hideNumber, isGameEnded, onExit, userNumber, userSate.coins, winValue]);

	const onClickHelp = useCallback(() => {
		Swal.fire({
			icon: "info",
			title: "Help",
			text: `You need to guess the hidden number between 0 and ${maxNumber}!`,
		});
	}, [maxNumber]);

	function HandIcon({ attempt }) {
		if (attempt < hideNumber) return <FaRegHandPointUp size={ICON_SIZE} title="Hidden number is BIGGER" />;
		else if (attempt > hideNumber) return <FaRegHandPointDown size={ICON_SIZE} title="Hidden number is LOWER" />;
		else return <BiLike size={ICON_SIZE} title="Nice one" />;
	}

	return (
		<div className={styles.game}>

			<div className={styles.helpExit}>
				<ButtonIcon onClick={onClickHelp} title="Help?"><BsQuestion size={ICON_SIZE} /></ButtonIcon>
				<ButtonIcon
					onClick={onExit}
					title="Exit"
					disabled={isGameEnded}
					className={isGameEnded && styles.disabled}
				><GiExitDoor size={ICON_SIZE} /></ButtonIcon>
			</div>

			<div className={styles.header}>
				<h2>Wining value: {winValue}</h2>
				<h3>Guess the number between 0 and {maxNumber}</h3>
			</div>

			<form onSubmit={onSubmit} className={styles.userGuess}>
				<input
					type="number"
					min={0}
					max={maxNumber}
					value={userNumber}
					onChange={(e) => setUserNumber(e.target.value)}
					disabled={isGameEnded}
					className={isGameEnded && styles.disabled}
				/>
				<ButtonIcon type="submit" disabled={isGameEnded} className={isGameEnded && styles.disabled}><GoCheck size={ICON_SIZE} /></ButtonIcon>
			</form>

			<ul className={styles.attemptsList}>
				{attemptsList.map((a, i) => {
					const style = {
						color: `rgb(0, ${255 - Math.abs(((a - hideNumber) / maxNumber) * 255)}, 0)`
					};

					return (
						<li key={i}>
							<span style={style}>{i + 1}</span>
							<span style={style}><GoArrowRight size={ICON_SIZE} /></span>
							<span style={style}>{a}</span>
							<span style={style} className={styles.helpCursor}><HandIcon attempt={a} /></span>
						</li>
					);
				}
				)}
				{attemptsList.length === 0 && <p>No Attempts</p>}
			</ul>
		</div>
	);
}

function Menu({ betValueIndex, setBetValueIndex, betValue, setCurrentWindow, difficulty, setDifficulty }) {
	const { userSate, dispatch } = useUserState();

	function help() {
		Swal.fire({
			icon: "info",
			title: "Help",
			text: "In this game you will try to find the hidden number",
		});
	}

	function onPlay() {
		if (userSate.coins - betValue < 0) {
			Swal.fire({
				icon: "error",
				title: "Not enough money",
				text: "I don't have enough money to bet",
			});
		} else {
			dispatch({ type: SET_COINS, payload: userSate.coins - betValue });
			setCurrentWindow(WINDOWS.game);
		}
	}

	return (
		<div className={styles.menu}>
			<ButtonIcon className={styles.questionBTN} onClick={help} title="Help?"><BsQuestion size={ICON_SIZE} /></ButtonIcon>

			<div className={`${styles.difficultySelection} ${styles.helpCursor}`} title="Select difficulty">
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

			<ButtonIcon title="Play" onClick={onPlay}><GiRun size={ICON_SIZE} /></ButtonIcon>
		</div>
	);
}

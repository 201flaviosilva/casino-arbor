import React, { useCallback, useEffect, useState } from "react";
import { BsQuestion } from "react-icons/bs";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { GiChessKing, GiFoxTail, GiTakeMyMoney } from "react-icons/gi";
import Swal from "sweetalert2";
import ButtonIcon from "../../../../Components/ButtonIcon";
import { SET_COINS } from "../../../../Context/User/Reducer";
import { useUserState } from "../../../../Context/User/UserState";
import styles from "./CoinFlip.module.scss";

const COIN_SIZE = 120;
const ICON_SIZE = 25;

const OPTIONS = {
	HEADS: "HEADS",
	TAILS: "TAILS",
};

export default function CoinFlip({ setModalSize }) {
	const [isBettingHeads, setIsBettingHeads] = useState(true);
	const [betValue, setBetValue] = useState(1);
	const [isPlaying, setIsPlaying] = useState(false);
	const [status, setStatus] = useState({ [OPTIONS.HEADS]: 0, [OPTIONS.TAILS]: 0 });
	const [result, setResult] = useState({ id: Math.random(), status: "", animation: "", });
	const { userSate, dispatch } = useUserState();

	useEffect(() => setModalSize({ width: 400, height: 500 }), [setModalSize]);

	const onClickFlip = useCallback(() => {
		if (userSate.coins - betValue < 0) {
			Swal.fire({
				icon: "error",
				title: "Not enough money",
				text: "I don't have enough money to bet",
			});
			return;
		}

		dispatch({ type: SET_COINS, payload: userSate.coins - betValue });

		const r = Math.random() > 0.5 ? OPTIONS.HEADS : OPTIONS.TAILS;

		setResult({
			id: Math.random(),
			status: r,
			animation: r === OPTIONS.HEADS ? styles.resultHead : styles.resultTail,
		});
		setIsPlaying(true);

		const delayTimer = setTimeout(() => {
			setIsPlaying(false);
			setStatus(prev => ({ ...prev, [r]: prev[r] + 1 }));

			if (
				(isBettingHeads && r === OPTIONS.HEADS) ||
				(!isBettingHeads && r === OPTIONS.TAILS)
			) {
				Swal.fire({ icon: "success", title: `YOU WON ${betValue * 4}!`, });
				dispatch({ type: SET_COINS, payload: userSate.coins + betValue * 4 });
			} else Swal.fire({ icon: "info", title: "YOU LOST!", });
		}, 3000);

		return () => clearTimeout(delayTimer);
	}, [betValue, dispatch, isBettingHeads, userSate.coins]);

	const onClickHelp = useCallback(() => {
		Swal.fire({
			icon: "info",
			title: "Help",
			text: "Guess the side of the coin when it lands.",
		});
	}, []);

	return (
		<div className={styles.container} key={result.id}>
			<aside>
				<ButtonIcon title="Help?" onClick={onClickHelp}><BsQuestion size={ICON_SIZE} /></ButtonIcon>
			</aside>

			<div className={styles.status}>
				<p>Heads: {status[OPTIONS.HEADS]}</p>
				<p>Tails: {status[OPTIONS.TAILS]}</p>
			</div>

			<div className={`${styles.coin} ${result.animation}`}>
				<div className={`${styles.side} ${styles.heads}`}><GiChessKing size={COIN_SIZE} /></div>
				<div className={`${styles.side} ${styles.tails}`}><GiFoxTail size={COIN_SIZE} /></div>
			</div>

			<div className={`${styles.betContainer}`}>
				<h3>Bet in:</h3>

				<div className={styles.betSelected}>
					<span
						onClick={() => setIsBettingHeads(true)}
						className={`${isBettingHeads && styles.active}`}>Heads</span>
					<button onClick={() => setIsBettingHeads(p => !p)}>
						{isBettingHeads ? <FaToggleOff size={ICON_SIZE} /> : <FaToggleOn size={ICON_SIZE} />}
					</button>
					<span
						onClick={() => setIsBettingHeads(false)}
						className={`${!isBettingHeads && styles.active}`}>Tails</span>
				</div>

				<ButtonIcon
					onClick={onClickFlip}
					disabled={isPlaying}
					title="Bet"
				>
					<GiTakeMyMoney size={ICON_SIZE} />
				</ButtonIcon>
			</div>
		</div>
	);
}

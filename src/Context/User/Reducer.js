import { setCoins } from "./StoreManager";

export const SET_COINS = "SET_COINS";

export function reducer(state, { type, payload }) {
	switch (type) {
		case SET_COINS:
			setCoins(payload);
			return {
				...state,
				coins: payload,
			};

		default:
			throw new Error(`Unhandled action type: ${type}`);
	}
}

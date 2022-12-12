import store from "store";

const NAME_SPACE = "user-state";

export function getState() {
	return store.get(NAME_SPACE);
}

export function setState(newState) {
	store.set(NAME_SPACE, newState);
	return getState();
}

export function setCoins(value) {
	const newState = { ...getState(), coins: value };
	return setState(newState);
}


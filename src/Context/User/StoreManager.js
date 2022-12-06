import store from "store";

export function getState() {
	return store.get("state");
}

export function setState(newState) {
	return store.set("state", newState);
}

export function setCoins(value) {
	const newState = { ...getState(), coins: value };
	return setState(newState);
}


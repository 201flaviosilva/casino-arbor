import store from "store";

const NAME_SPACE = "tree-state";

// --- State
export function setState(newState) {
	store.set(NAME_SPACE, newState);
	return getState();
}

export function getState() {
	return store.get(NAME_SPACE);
}

// --- Experience
export function setExperience(value) {
	const newState = { ...getState(), experience: value };
	return setState(newState);
}

// --- Last Update
export function getLastUpdated() {
	return getState().lastUpdate;
}

export function setLastUpdated(value) {
	const newState = { ...getState(), lastUpdate: value };
	return setState(newState);
}


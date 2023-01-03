import { setExperience, setLastUpdated } from "./StoreManager";

export const SET_EXPERIENCE = "SET_EXPERIENCE";
export const SET_LAST_UPDATE = "SET_LAST_UPDATE";

export default function reducer(state, { type, payload }) {
	switch (type) {
		case SET_EXPERIENCE:
			setExperience(payload);
			return {
				...state,
				experience: payload,
			};

		case SET_LAST_UPDATE:
			setLastUpdated(payload);
			return {
				...state,
				lastUpdate: payload,
			};

		default:
			throw new Error(`Unhandled action type: ${type}`);
	}
}

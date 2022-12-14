import React, { useReducer, useEffect, createContext, useContext, useCallback } from "react";
import moment from "moment";

import { setState, getState } from "./StoreManager";
import reducer, { SET_EXPERIENCE, SET_LAST_UPDATE } from "./Reducer";

import { SET_COINS } from "../User/Reducer";
import { useUserState } from "../User/UserState";
import { getCurrentLevel } from "./levels";

const initialState = {
	experience: 1,
	lastUpdate: new Date(),
};

const TreeStateContext = createContext();

export default function TreeSateStateProvider({ children }) {
	const [treeSate, dispatch] = useReducer(reducer, getState() || initialState);
	const { userSate, dispatch: userDispatch } = useUserState();

	const checkTime = useCallback(() => {
		const startTime = moment(treeSate.lastUpdate);
		const endTime = moment(new Date());

		const duration = moment.duration(endTime.diff(startTime));

		if (duration.asMinutes() >= 1) {
			const minutes = Math.floor(duration.asMinutes());
			dispatch({ type: SET_EXPERIENCE, payload: treeSate.experience + minutes });
			userDispatch({ type: SET_COINS, payload: userSate.coins + getCurrentLevel(treeSate.experience) * minutes });
			dispatch({ type: SET_LAST_UPDATE, payload: new Date() });
		}

		// --- Debug only
		sessionStorage.setItem("duration", duration.asMinutes());
		sessionStorage.setItem("totalTreeExperience", treeSate.experience);
		// ---
	}, [treeSate.experience, treeSate.lastUpdate, userDispatch, userSate.coins]);

	useEffect(() => {
		if (!getState()) setState(initialState);

		const time = 1000 * 5;
		const interval = setInterval(checkTime, time);
		return () => clearInterval(interval);
	}, [checkTime]);

	return (
		<TreeStateContext.Provider value={{ treeSate, dispatch }}>
			{children}
		</TreeStateContext.Provider>
	);
}

export function useTreeState() {
	const context = useContext(TreeStateContext);
	const { treeSate, dispatch } = context;
	return { treeSate, dispatch };
}

import React, { createContext, useContext, useEffect, useReducer } from "react";
import pkg from "../../../package.json";
import { reducer } from "./Reducer";
import { getState, setState } from "./StoreManager";

const initialState = {
	version: pkg.version,
	coins: 0,
};

const UserStateContext = createContext();

export default function GameStateProvider({ children }) {
	const [userSate, dispatch] = useReducer(reducer, getState() || initialState);

	useEffect(() => {
		if (!getState() || getState().version !== pkg.version) setState(initialState);
	}, []);

	return (
		<UserStateContext.Provider value={{ userSate, dispatch }}>
			{children}
		</UserStateContext.Provider>
	);
}

export function useUserState() {
	const context = useContext(UserStateContext);
	const { userSate, dispatch } = context;
	return { userSate, dispatch };
}

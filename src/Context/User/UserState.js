import React, { useReducer, createContext, useContext, useEffect } from "react";

import { getState, setState } from "./StoreManager";
import { reducer } from "./Reducer";

const initialState = {
	coins: 0,
};

const UserStateContext = createContext();

export default function GameStateProvider({ children }) {
	const [userSate, dispatch] = useReducer(reducer, getState() || initialState);

	useEffect(() => {
		if (!getState()) setState(initialState);
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

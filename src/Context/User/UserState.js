import React, { useReducer, createContext, useContext } from "react";

import { getState } from "./StoreManager";
import { reducer, SET_COINS } from "./Reducer";

const initialState = {
	coins: 0,
};

const UserStateContext = createContext();

export default function GameStateProvider({ children }) {
	const [userSate, dispatch] = useReducer(reducer, getState() || initialState);

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

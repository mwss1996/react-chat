import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { EMPTY_STATE } from "./states";
import { reduceReducers } from "./reducers/reduceReducers";
import { chatReducer } from "./reducers/chat/reducer";
import { messageReducer } from "./reducers/messages/reducer";
import { userReducer } from "./reducers/users/reducer";

interface StoreContainerProps {
	children: React.ReactNode;
}
export function StoreContainer(props: StoreContainerProps) {
	const initialState = EMPTY_STATE;
	const store = createStore(
		reduceReducers(initialState, chatReducer, messageReducer, userReducer)
	);
	return <Provider store={store}>{props.children}</Provider>;
}

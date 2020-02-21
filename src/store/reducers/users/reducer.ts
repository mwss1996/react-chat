import { StoreStateType } from "../../states";
import uuidv4 from "uuid/v4";
import { UserAction, CREATE_USER } from "./actions";

export function userReducer(
	state: StoreStateType,
	action: UserAction
): StoreStateType {
	switch (action.type) {
		case CREATE_USER:
			const newUserId = uuidv4();
			return {
				...state,
				users: {
					...state.users,
					[newUserId]: {
						id: newUserId,
						name: action.name
					}
				}
			};
		default:
			return state;
	}
}

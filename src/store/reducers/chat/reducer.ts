import { StoreStateType } from "../../states";
import uuidv4 from "uuid/v4";
import { ChatAction, CREATE_CHAT } from "./actions";

export function chatReducer(
	state: StoreStateType,
	action: ChatAction
): StoreStateType {
	switch (action.type) {
		case CREATE_CHAT:
			const newChatId = uuidv4();
			return {
				...state,
				chats: {
					...state.chats,
					[newChatId]: {
						id: newChatId,
						userIds: action.userIds
					}
				}
			};
		default:
			return state;
	}
}

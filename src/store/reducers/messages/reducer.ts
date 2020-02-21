import { StoreStateType } from "../../states";
import uuidv4 from "uuid/v4";
import { MessageAction, CREATE_MESSAGE } from "./actions";

export function messageReducer(
	state: StoreStateType,
	action: MessageAction
): StoreStateType {
	switch (action.type) {
		case CREATE_MESSAGE:
			const newMessageId = uuidv4();
			return {
				...state,
				messages: {
					...state.messages,
					[newMessageId]: {
						id: newMessageId,
						dateTime: action.dateTime,
						text: action.text,
						userId: action.userId,
						chatId: action.chatId
					}
				}
			};
		default:
			return state;
	}
}

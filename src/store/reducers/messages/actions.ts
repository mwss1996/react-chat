import { MessageType } from "../../states";

export const CREATE_MESSAGE = "CREATE_MESSAGE";

export interface CreateMessageAction {
	type: typeof CREATE_MESSAGE;
	dateTime: Date;
	text: string;
	userId: string;
	chatId: string;
}

export type MessageAction = CreateMessageAction;

export function createMessage(
	dateTime: Date,
	text: string,
	userId: string,
	chatId: string
) {
	return {
		type: CREATE_MESSAGE,
		dateTime,
		text,
		userId,
		chatId
	};
}

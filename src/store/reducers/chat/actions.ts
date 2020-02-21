import { ChatType } from "../../states";

export const CREATE_CHAT = "CREATE_CHAT";

export interface CreateChatAction {
	type: typeof CREATE_CHAT;
	userIds: string[];
}

export type ChatAction = CreateChatAction;

export function createChat(userIds: string[]) {
	return {
		type: CREATE_CHAT,
		userIds
	};
}

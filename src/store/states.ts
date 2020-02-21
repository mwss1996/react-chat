import uuidv4 from "uuid/v4";

interface Entity {
	id: string;
}
export interface UserType extends Entity {
	name: string;
}
export interface ChatType extends Entity {
	userIds: string[];
}
export interface MessageType extends Entity {
	dateTime: Date;
	text: string;
	userId: string;
	chatId: string;
}
export interface SessionType {
	loggedUserId: string;
}
export interface StateSlice<T> {
	[id: string]: T;
}
export interface StoreStateType {
	users: StateSlice<UserType>;
	chats: StateSlice<ChatType>;
	messages: StateSlice<MessageType>;
	session: SessionType;
}
const loggedUserId: string = uuidv4();
const robot: string = uuidv4();
export const EMPTY_STATE: StoreStateType = {
	users: {
		[loggedUserId]: {
			id: loggedUserId,
			name: ""
		},
		[robot]: {
			id: robot,
			name: "Robot"
		}
	},
	chats: {},
	messages: {},
	session: {
		loggedUserId
	}
};

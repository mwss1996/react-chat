import { UserType } from "../../states";

export const CREATE_USER = "CREATE_USER";

export interface CreateUserAction {
	type: typeof CREATE_USER;
	name: string;
}

export type UserAction = CreateUserAction;

export function createUser(name: string) {
	return {
		type: CREATE_USER,
		name
	};
}

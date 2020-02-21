import * as React from "react";
import { useSelector } from "react-redux";
import { ChatType, StoreStateType } from "../../store/states";
import { compareStringArrays } from "../../store/utils/compareStringArrays";
import { Header } from "./presentational/Header";
import { Row } from "./presentational/Row";
import { Users } from "./presentational/Users";

export function UsersContainer() {
	const { users, chats, messages, session } = useSelector(
		(state: StoreStateType) => ({
			users: state.users,
			chats: state.chats,
			messages: state.messages,
			session: state.session
		})
	);
	const rows = Object.values(users)
		.filter(user => user.id !== session.loggedUserId)
		.map(user => {
			const requiredUserIds = [user.id, session.loggedUserId];
			let chat = (Object.values(chats) as ChatType[]).find(chat =>
				compareStringArrays(chat.userIds, requiredUserIds)
			);
			let lastMessageText = undefined;
			if (chat) {
				const lastMessage = Object.values(messages)
					.filter(message => message.chatId == (chat as ChatType).id)
					.sort(
						(a, b) => b.dateTime.getTime() - a.dateTime.getTime()
					);
				if (lastMessage.length > 0) {
					const userName =
						lastMessage[0].userId === session.loggedUserId
							? "Você"
							: users[lastMessage[0].userId].name;
					const messageText = lastMessage[0].text;
					lastMessageText =
						(userName + ": " + messageText)
							.substring(0, 25)
							.trim() + "...";
				}
			}
			return (
				<Row
					key={user.id}
					name={user.name}
					lastMessage={lastMessageText}
					linkTo={"/chat/user/" + user.id}
				/>
			);
		});
	return <Users header={<Header />} rows={rows} />;
}

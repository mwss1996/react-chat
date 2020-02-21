import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createChat } from "../../store/reducers/chat/actions";
import { createMessage } from "../../store/reducers/messages/actions";
import { ChatType, StoreStateType } from "../../store/states";
import { compareStringArrays } from "../../store/utils/compareStringArrays";
import { Chat } from "./presentational/Chat";
import { Header } from "./presentational/Header";
import { Input } from "./presentational/Input";
import { Message } from "./presentational/Message";
import { APIResultDisplay } from "./presentational/APIResultDisplay";

interface ChatContainerProps {
	userId: string;
}
export function ChatContainer(props: ChatContainerProps) {
	const dispatch = useDispatch();
	const inputRef = React.useRef<HTMLInputElement>(null);
	const { users, chats, messages, session } = useSelector(
		(state: StoreStateType) => ({
			users: state.users,
			chats: state.chats,
			messages: state.messages,
			session: state.session
		})
	);
	const [APIResult, setAPIResult] = React.useState({
		isLoading: false,
		message: undefined
	});
	const requiredUserIds = [props.userId, session.loggedUserId];
	let chat = Object.values(chats).find(chat =>
		compareStringArrays(chat.userIds, requiredUserIds)
	);
	if (!chat) {
		dispatch(createChat(requiredUserIds));
		//This div will never be rendered, but it is required here to kill the function
		return <div>Loading...</div>;
	}
	//@ts-ignore
	const chatUserIds = chat.userIds.filter(id => id !== session.loggedUserId);
	const chatUserNames = chatUserIds.map(userId => users[userId].name);
	const chatTitle = chatUserNames.join(", ");
	const messageComponents = Object.values(messages)
		.filter(message => message.chatId === (chat as ChatType).id)
		.sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime())
		.map(message => (
			<Message
				key={message.id}
				isYourMessage={message.userId === session.loggedUserId}
				userName={
					message.userId === session.loggedUserId
						? "You"
						: users[message.userId].name
				}
				text={message.text}
				dateTime={message.dateTime}
			/>
		));
	if (messageComponents.length === 0) {
		setTimeout(
			() =>
				dispatch(
					createMessage(
						new Date(),
						"Welcome! How can i help you?",
						chatUserIds[0],
						chat?.id
					)
				),
			500
		);
	}
	if (APIResult.isLoading || APIResult.message) {
		messageComponents.push(
			<APIResultDisplay
				isLoading={APIResult.isLoading}
				message={APIResult.message}
			/>
		);
	}
	return (
		<Chat
			header={<Header title={chatTitle} />}
			messages={messageComponents}
			input={
				<Input
					inputRef={inputRef}
					onSubmit={event => {
						if (inputRef.current && inputRef.current.value) {
							const inputValue = inputRef.current.value;
							inputRef.current.value = "";
							dispatch(
								createMessage(
									new Date(),
									inputValue,
									session.loggedUserId,
									chat.id
								)
							);
							setTimeout(() => {
								fetch(
									"https://baconipsum.com/api/?type=meat-and-filler&paras=1"
								)
									.then(response => response.json())
									.then(response => {
										dispatch(
											createMessage(
												new Date(),
												response[0]
													.substring(0, 100)
													.trim() + "...",
												chatUserIds[0],
												chat?.id
											)
										);
										setAPIResult({
											isLoading: false,
											message: undefined
										});
									})
									.catch(reason =>
										setAPIResult({
											isLoading: false,
											message: reason
										})
									);
							}, 1000);
							setAPIResult({
								isLoading: true,
								message: undefined
							});
						}
						event.preventDefault();
					}}
				/>
			}
		/>
	);
}

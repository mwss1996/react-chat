import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UsersContainer } from "../users/UsersContainer";
import { ChatContainer } from "../chat/ChatContainer";
import { Styles } from "../shared/Styles";
import { useSelector } from "react-redux";
import { StoreStateType } from "../../store/states";
import { UserCRUDModalContainer } from "../userCRUDModal/UserCRUDModalContainer";
import { PlatformContext } from "../../PlatformProvider";
import { defaultStyles } from "../shared/defaultStyles";

export function NavigationContainer() {
	const { users, session } = useSelector((state: StoreStateType) => ({
		users: state.users,
		session: state.session
	}));
	const { platform } = React.useContext(PlatformContext);
	const chatRoutes = Object.values(users)
		.filter(user => user.id !== session.loggedUserId)
		.map(user => {
			return (
				<Route key={user.id} path={"/chat/user/" + user.id}>
					<ChatContainer userId={user.id} />
				</Route>
			);
		});
	if (platform === "mobile") {
		return (
			<BrowserRouter>
				<Route exact path={"/user"}>
					<UserCRUDModalContainer />
				</Route>
				<Switch>
					{chatRoutes}
					<Route>
						<UsersContainer />
					</Route>
				</Switch>
			</BrowserRouter>
		);
	}
	return (
		<BrowserRouter>
			<Route exact path={"/user"}>
				<UserCRUDModalContainer />
			</Route>
			<UsersContainer />
			<Switch>
				{chatRoutes}
				<Route>
					<div
						style={{
							backgroundColor:
								defaultStyles.colors.chatBackground,
							display: "flex",
							flexGrow: 1
						}}
					></div>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

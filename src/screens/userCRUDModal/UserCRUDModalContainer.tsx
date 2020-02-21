import * as React from "react";
import { useDispatch } from "react-redux";
import { UserCRUDModal } from "./presentational/UserCRUDModal";
import { useHistory } from "react-router-dom";
import { createUser } from "../../store/reducers/users/actions";

export function UserCRUDModalContainer() {
	const dispatch = useDispatch();
	let history = useHistory();
	const inputRef = React.useRef<HTMLInputElement>(null);
	return (
		<UserCRUDModal
			inputRef={inputRef}
			onSubmit={event => {
				if (inputRef.current && inputRef.current.value) {
					dispatch(createUser(inputRef.current.value));
					history.goBack();
				}
				event.preventDefault();
			}}
			onCancel={() => {
				history.goBack();
			}}
		/>
	);
}

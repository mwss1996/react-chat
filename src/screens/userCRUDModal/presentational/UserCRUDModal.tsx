import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";

const styles: Styles = {
	background: {
		position: "absolute",
		height: "100vh",
		width: "100%",
		backgroundColor: "rgba(0,0,0,0.5)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	container: {
		display: "flex",
		backgroundColor: "white",
		padding: defaultStyles.metrics.mediumMargin,
		borderRadius: defaultStyles.metrics.mediumRadius
	},
	form: { display: "flex", flexDirection: "column", alignItems: "center" },
	title: {
		fontSize: defaultStyles.fontSizes.large,
		marginBottom: defaultStyles.metrics.mediumMargin
	},
	input: {
		padding: defaultStyles.metrics.mediumMargin
	},
	buttons: {
		display: "flex",
		alignSelf: "flex-end",
		marginTop: defaultStyles.metrics.mediumMargin
	},
	cancel: {
		marginRight: defaultStyles.metrics.mediumMargin,
		backgroundColor: "white",
		border: "none",
		padding: defaultStyles.metrics.mediumMargin,
		cursor: "pointer"
	},
	submit: {
		backgroundColor: defaultStyles.colors.purple,
		border: "none",
		borderRadius: defaultStyles.metrics.mediumRadius,
		fontWeight: 600,
		color: defaultStyles.fontColors.contrastText,
		padding: defaultStyles.metrics.mediumMargin,
		cursor: "pointer"
	}
};
interface UserCRUDModalProps {
	inputRef: React.RefObject<HTMLInputElement>;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onCancel: () => void;
}
export function UserCRUDModal(props: UserCRUDModalProps) {
	return (
		<div style={styles.background} onClick={props.onCancel}>
			<div
				style={styles.container}
				onClick={event => event.stopPropagation()}
			>
				<form style={styles.form} onSubmit={props.onSubmit}>
					<div style={styles.title}>Add User</div>
					<input
						style={styles.input}
						ref={props.inputRef}
						type="text"
						placeholder={"Type a name for the user..."}
					/>
					<div style={styles.buttons}>
						<button style={styles.cancel} onClick={props.onCancel}>
							Cancel
						</button>
						<input
							style={styles.submit}
							type="submit"
							value="Submit"
						></input>
					</div>
				</form>
			</div>
		</div>
	);
}

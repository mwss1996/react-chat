import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";

const styles: Styles = {
	container: {},
	formContainer: {
		display: "flex",
		margin: defaultStyles.metrics.mediumMargin,
		marginTop: defaultStyles.metrics.smallMargin
	},
	textBar: {
		padding: defaultStyles.metrics.mediumMargin,
		flexGrow: 1,
		marginRight: defaultStyles.metrics.mediumMargin,
		border: "none",
		borderRadius: defaultStyles.metrics.mediumRadius
	},
	sendButton: {
		backgroundColor: defaultStyles.colors.purple,
		border: "none",
		color: defaultStyles.fontColors.contrastText,
		fontWeight: 600,
		padding: defaultStyles.metrics.mediumMargin,
		borderRadius: defaultStyles.metrics.mediumRadius,
		cursor: "pointer"
	}
};
interface InputProps {
	inputRef: React.RefObject<HTMLInputElement>;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export function Input(props: InputProps) {
	return (
		<div style={styles.container}>
			<form style={styles.formContainer} onSubmit={props.onSubmit}>
				<input
					style={styles.textBar}
					ref={props.inputRef}
					type="text"
					placeholder="Type something..."
				/>
				<input
					style={styles.sendButton}
					type="submit"
					value="Send"
				></input>
			</form>
		</div>
	);
}

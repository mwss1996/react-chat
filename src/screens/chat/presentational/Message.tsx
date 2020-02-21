import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";

const styles: Styles = {
	outerContainer: {
		display: "flex",
		flexDirection: "column"
	},
	container: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "white",
		margin: defaultStyles.metrics.mediumMargin,
		marginBottom: 0,
		padding: defaultStyles.metrics.smallMargin,
		width: "70%",
		borderRadius: defaultStyles.metrics.largeRadius,
		borderTopLeftRadius: defaultStyles.metrics.mediumRadius
	},
	yourMessage: {
		backgroundColor: defaultStyles.colors.yourMessage,
		borderTopRightRadius: defaultStyles.metrics.mediumRadius,
		alignSelf: "flex-end"
	},
	userName: {
		marginBottom: defaultStyles.metrics.smallMargin,
		fontWeight: 600
	},
	text: {},
	dateTime: {
		textAlign: "right"
	}
};
interface MessageProps {
	userName: string;
	text: string;
	dateTime: Date;
	isYourMessage: boolean;
}
export function Message(props: MessageProps) {
	return (
		<div className="message" style={styles.outerContainer}>
			<div
				style={{
					...styles.container,
					...(props.isYourMessage ? styles.yourMessage : {})
				}}
			>
				<div style={styles.userName}>{props.userName}</div>
				<div style={styles.text}>{props.text}</div>
				<div style={styles.dateTime}>
					{props.dateTime.toLocaleDateString()}
				</div>
			</div>
		</div>
	);
}

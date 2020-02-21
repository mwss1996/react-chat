import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";
import { Link } from "react-router-dom";

const styles: Styles = {
	container: {
		display: "flex",
		textDecoration: "none",
		color: defaultStyles.fontColors.regularText,
		padding: defaultStyles.metrics.smallMargin
	},
	leftColumn: {
		display: "flex",
		alignItems: "center"
	},
	image: {
		width: 50,
		marginRight: defaultStyles.metrics.smallMargin
	},
	rightColumn: {
		display: "flex",
		flexGrow: 1,
		flexDirection: "column",
		justifyContent: "center"
	},
	name: {},
	lastMessage: {}
};
interface RowProps {
	name: string;
	lastMessage: string | undefined;
	linkTo: string;
}
export function Row(props: RowProps) {
	return (
		<Link style={styles.container} to={props.linkTo}>
			<div style={styles.leftColumn}>
				<img
					style={styles.image}
					src="/react-chat/assets/robot.png"
				></img>
			</div>
			<div style={styles.rightColumn}>
				<div style={styles.name}>{props.name}</div>
				{props.lastMessage && (
					<div style={styles.lastMessage}>{props.lastMessage}</div>
				)}
			</div>
		</Link>
	);
}

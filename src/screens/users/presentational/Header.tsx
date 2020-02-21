import { faFeatherAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";
import { defaultStyles } from "../../shared/defaultStyles";
import { Styles } from "../../shared/Styles";

const styles: Styles = {
	container: {
		display: "flex",
		alignItems: "center"
	},
	logo: {
		padding: defaultStyles.metrics.mediumMargin
	},
	logoIcon: {
		color: defaultStyles.colors.purple,
		fontSize: defaultStyles.fontSizes.large
	},
	title: {
		flexGrow: 1
	},
	addButton: {
		padding: defaultStyles.metrics.mediumMargin
	},
	addButtonIcon: {
		color: defaultStyles.colors.purple,
		fontSize: defaultStyles.fontSizes.large
	}
};
interface HeaderProps {}
export function Header(props: HeaderProps) {
	return (
		<div style={styles.container}>
			<div style={styles.logo}>
				<FontAwesomeIcon style={styles.logoIcon} icon={faFeatherAlt} />
			</div>
			<div style={styles.title}>Messages</div>
			<Link style={styles.addButton} to="/user">
				<FontAwesomeIcon
					style={styles.addButtonIcon}
					icon={faPlusCircle}
				/>
			</Link>
		</div>
	);
}

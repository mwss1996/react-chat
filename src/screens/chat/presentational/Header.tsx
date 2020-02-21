import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";
import { Link } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlatformContext } from "../../../PlatformProvider";

const styles: Styles = {
	container: {
		display: "flex",
		backgroundColor: "white",
		alignItems: "center",
		boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.10)"
	},
	desktopHeader: {
		borderLeftWidth: 2,
		borderLeftColor: defaultStyles.colors.chatBackground,
		borderLeftStyle: "solid"
	},
	backButton: {
		color: defaultStyles.colors.purple,
		padding: defaultStyles.metrics.mediumMargin,
		fontSize: defaultStyles.fontSizes.large,
		height: "100%",
		boxSizing: "border-box",
		display: "flex",
		alignItems: "center"
	},
	image: {
		width: 60,
		height: 60,
		padding: defaultStyles.metrics.smallMargin
	},
	title: {
		fontSize: defaultStyles.fontSizes.large
	}
};
interface HeaderProps {
	title: string;
}
export function Header(props: HeaderProps) {
	const { platform } = React.useContext(PlatformContext);
	return (
		<div
			style={{
				...styles.container,
				...(platform === "mobile" ? {} : styles.desktopHeader)
			}}
		>
			{platform === "mobile" && (
				<Link to="/" style={styles.backButton}>
					<FontAwesomeIcon
						style={styles.addButtonIcon}
						icon={faChevronLeft}
					/>
				</Link>
			)}
			<img style={styles.image} src="./robot.png"></img>
			<div style={styles.title}>{props.title}</div>
		</div>
	);
}

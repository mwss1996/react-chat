import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";
import { PlatformContext } from "../../../PlatformProvider";

const styles: Styles = {
	container: {
		display: "flex",
		flexDirection: "column"
	}
};
interface UsersProps {
	header: JSX.Element;
	rows: JSX.Element[];
}
export function Users(props: UsersProps) {
	const { platform } = React.useContext(PlatformContext);
	const width = platform === "desktop" ? 350 : "100%";
	return (
		<div style={{ ...styles.container, width }}>
			{props.header}
			{props.rows}
		</div>
	);
}

import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";

const styles: Styles = {
	container: {
		display: "flex",
		padding: defaultStyles.metrics.mediumMargin,
		alignItems: "center",
		justifyContent: "center"
	}
};
interface APIResultDisplayProps {
	isLoading: boolean;
	message: string | undefined;
}
export function APIResultDisplay(props: APIResultDisplayProps) {
	if (props.isLoading) {
		return <div style={styles.container}>Loading...</div>;
	}
	return <div style={styles.container}>{props.message}</div>;
}

import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";

const styles: Styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: defaultStyles.colors.chatBackground,
		flexGrow: 1,
		flexBasis: 0,
		overflow: "hidden"
	},
	messages: {
		flexDirection: "column",
		justifyContent: "flex-end",
		overflow: "auto",
		flexGrow: 1
	}
};
interface ChatProps {
	header: JSX.Element;
	messages: JSX.Element[];
	input: JSX.Element;
}
export function Chat(props: ChatProps) {
	const messagesContainerRef = React.useRef<HTMLDivElement>(null);
	React.useEffect(() => {
		if (messagesContainerRef.current) {
			messagesContainerRef.current.scrollTo({
				top: messagesContainerRef.current.scrollHeight
			});
		}
	});
	return (
		<div style={styles.container}>
			{props.header}
			<div ref={messagesContainerRef} style={styles.messages}>
				{props.messages}
			</div>
			{props.input}
		</div>
	);
}

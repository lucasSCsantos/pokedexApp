import * as React from "react";
import theme from "../../styles/theme";

export type IconName = "dark" | "bug" | "dragon";

type IconProps = {
	name: IconName,
	size: number,
	color: string,
}

class Icon extends React.PureComponent<IconProps> {
	static defaultProps = {
		color: theme.color.text.white,
		size: 15,
	}
}
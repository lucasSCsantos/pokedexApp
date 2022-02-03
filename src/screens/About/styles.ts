import styled, { css } from 'styled-components/native';
import theme from '../../styles/theme';

export type ContainerProps = {
	color?: keyof typeof theme.color.background.type;
}

export const Container = styled.View<ContainerProps>`
	${({ color = "grass" }) => css`
		background-color: ${theme.color.background.type[color]};
	`}
	flex: 3;
`;

export const InfoContainer = styled.View`
	width: 100%;
	background-color: white;
	height: 65%;
	position: absolute;
	bottom: 0;
	border-radius: 30px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	padding: 40px 40px 0;
`;

export const PokedexDataContainer = styled.View`
	margin-top: 30px;
`;
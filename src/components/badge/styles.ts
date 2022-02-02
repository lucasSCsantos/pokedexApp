import styled, { css } from 'styled-components/native';
import theme from '../../styles/theme';

export type ContainerProps = {
	type: keyof typeof theme.color.type
}

export const Container = styled.View<ContainerProps>`
	${({ type }) => css`
			background-color: ${theme.color.type[type]};
	`}
	min-width: 46px;
	flex-direction: row;
	height: 25px;
	border-radius: 3px;
	padding: 5px;
	display: flex;
	justify-content: space-around;

`;

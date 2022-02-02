import styled, { css } from 'styled-components/native';
import theme from '../../styles/theme';

export type TextProps = {
	color: keyof typeof theme.color.text;
}

export const Title = styled.Text<TextProps>`
	${({ color }) => css`
		color: ${theme.color.text[color]};
	`}
	font-weight: bold;
	font-size: 100px;
`;

export const ApplicationTitle = styled.Text<TextProps>`
	${({ color }) => css`
		color: ${theme.color.text[color]};
	`}
	font-weight: bold;
	font-size: 32px;
`;

export const PokemonName = styled.Text<TextProps>`
	${({ color }) => css`
		color: ${theme.color.text[color]};
	`}
	font-weight: bold;
	font-size: 26px;
`;

export const FilterTitle = styled.Text<TextProps>`
	${({ color }) => css`
		color: ${theme.color.text[color]};
	`}
	font-weight: bold;
	font-size: 16px;
`;

export const Description = styled.Text<TextProps>`
	${({ color }) => css`
		color: ${theme.color.text[color]};
	`}
	font-weight: 400;
	font-size: 16px;
`;

export const PokemonNumber = styled.Text<TextProps>`
	${({ color }) => css`
		color: ${theme.color.text[color]};
	`}
	font-weight: bold;
	font-size: 12px;
`;

export const PokemonType = styled.Text<TextProps>`
	${({ color }) => css`
		color: ${theme.color.text[color]};
	`}
	font-weight: 500;
	font-size: 12px;
`;
import styled, { css } from 'styled-components/native';
import theme from '../../styles/theme';

export type ContainerProps = {
	color?: keyof typeof theme.color.background.type;
}

export const Container = styled.View<ContainerProps>`
	${({ color = "grass" }) => css`
		background-color: ${theme.color.background.type[color]};
	`}
	align-items: center;
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

export const DataContainer = styled.View`
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
`

export const WeaknessesContainer = styled.View`
	display: flex;
	flex-direction: row;
`
export const FaceContainer = styled.View`
	display: flex;
	flex-direction: row;
	margin-top: 95px;
	width: 334px;
	align-items: center;
`

export const PokemonImage = styled.Image`
	width: 125px;
	height: 125px;
	margin-right: 25px;
`

export const BadgeContainer = styled.View`
	display: flex;
	flex-direction: row;
	min-width: 120px;
	margin-top: 5px;
`;

export const FaceInfoContainer = styled.View`
	width: 209px;
`;
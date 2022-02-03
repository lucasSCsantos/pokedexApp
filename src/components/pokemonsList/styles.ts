import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	width: 100%;
	margin-top: 20px;
`;

export const CardContainer = styled.View`
	background-color: ${({ theme }) => theme.color.background.type.grass};
	width: 100%;
	height: 115px;
	margin-bottom: 30px;
	border-radius: 10px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	z-index: 1;
	margin-top: 10px;
`;

export const BadgeContainer = styled.View`
	/* background-color: red; */
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 140px;
	margin-top: 5px;
`;

export const PokemonImage = styled.Image`
	width: 130px;
	height: 130px;
	position: absolute;
	right: 20px;
	top: -20px;
	z-index: 10;
`

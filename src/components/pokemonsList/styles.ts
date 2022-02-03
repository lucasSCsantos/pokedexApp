import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	width: 100%;
	margin-top: 20px;
`;

export const CardContainer = styled.View`
	background-color: ${({ theme }) => theme.color.type.grass};
	width: 100%;
	height: 115px;
	margin-bottom: 30px;
	border-radius: 10px;
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

export const BadgeContainer = styled.View`
	/* background-color: red; */
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 140px;
	margin-top: 5px;
`;

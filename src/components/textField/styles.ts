import styled from 'styled-components/native';

export const Container = styled.View`
	width: 334px;
	border-radius: 10px;
	height: 60px;
	background-color: ${({ theme }) => theme.color.background.defaultInput};
	display: flex;
	padding: 20px 27px;
	align-items: center;
	flex-direction: row;
`;

export const Input = styled.TextInput`
	margin-left: 12px;
	font-size: 16px;
	font-weight: 400;
	height: 19px;
`

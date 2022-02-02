import styled from 'styled-components/native';

export const Container = styled.View`
	width: 334px;
	border-radius: 10px;
	height: 60px;
	background-color: ${({ theme }) => theme.color.text.grey};
`;

export const Input = styled.TextInput`
	margin: 12px;
	border-width: 1px;
	padding: 10px;
`

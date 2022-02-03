import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	/* align-items: center; */
	/* justify-content: center; */
	background-color: ${({ theme }) => theme.color.background.white};
	padding: 100px 40px 0;
`;

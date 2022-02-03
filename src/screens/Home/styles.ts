import styled from 'styled-components/native';
import TextField from '../../components/textField';
import { ApplicationTitle, Description } from '../../components/typography';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.color.background.white};
	padding: 100px 40px 0;
`;

export const AppTitle = styled(ApplicationTitle)`
	margin-bottom: 10px;
`;

export const HomeDescription = styled(Description)`
	margin-bottom: 25px;
`;


export const HomeTextField = styled(TextField)`
	margin-bottom: 20px;
`;
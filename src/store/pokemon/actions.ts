export const SET_NAME = 'SET_NAME';

export const setName = (payload: string) => {
	return {
		type: SET_NAME,
		payload
	}
}
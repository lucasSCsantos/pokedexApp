import { SET_NAME } from "./actions";

const INITIAL_STATE = {
	pokemon: '',
}

export default (state = INITIAL_STATE, action: { type: string, payload: string }) => {
	switch (action.type) {
		case SET_NAME:
			return {...state, name: action.payload}
		default:
			return state;
	}
}
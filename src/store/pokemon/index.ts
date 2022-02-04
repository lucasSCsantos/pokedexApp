import { Reducer } from "redux";
import { SET_NAME } from "./actions";
import { PokemonAction } from "./types";

const INITIAL_STATE = {
	pokemon: '',
}


const reducer = (state = INITIAL_STATE, action: PokemonAction) => {
	switch (action.type) {
		case SET_NAME:
			return {...state, pokemon: action.payload}
		default:
			return state;
	}
}

export default reducer;
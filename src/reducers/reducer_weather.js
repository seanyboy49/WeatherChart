import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.paload.data]); // concat creates a new instance
      return [ action.payload.data, ...state] // es6 magic that takes all the entries of state and moves them into the new array
  }
  return state;
}

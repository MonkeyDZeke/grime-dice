/*
 src/reducers/simpleReducer.js
*/

export default (state = {}, action) => {
  switch (action.type) {
    case 'ROLL':
      return {
        results: action.payload.map(die => Math.floor(die * Math.random()) + 1)
      }
    default:
      return state
  }
}

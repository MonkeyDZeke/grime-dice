/*
 src/actions/roll.js
*/

export const roll = dice => dispatch => {
  dispatch({
    type: 'ROLL',
    payload: dice
  })
}

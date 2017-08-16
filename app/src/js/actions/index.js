import * as types from './actionTypes';

export function checkIdProvided(id) {
  return (dispatch) => {
    dispatch({
      type: types.CHECK_ID_PROVIDED,
      payload: id,
    });
  };
}

export function mapGenerated() {
  return (dispatch) => {
    dispatch({
      type: types.MAP_GENERATED,
    });
  };
}

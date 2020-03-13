import produce from 'immer';

const INITIAL_STATE = {
  breed: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@dogs/DOG_REQUEST': {
        break;
      }
      case '@dogs/DOG_SUCCESS': {
        draft.breed = action.payload.breed;
        break;
      }
      case '@dogs/SIGN_FAILURE': {
        draft.loading = false;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}

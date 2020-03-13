export function dogRequest(breed) {
  return {
    type: '@dogs/DOG_REQUEST',
    payload: {breed},
  };
}

export function dogSuccess(breed) {
  return {
    type: '@dogs/DOG_SUCCESS',
    payload: {breed},
  };
}

export function dogFailure() {
  return {
    type: '@dogs/DOG_FAILURE',
  };
}

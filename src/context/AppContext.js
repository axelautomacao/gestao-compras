const subscribers = new Set();
const state = {
  authUser: null,
};

export function getState() {
  return { ...state };
}

export function updateState(partial) {
  Object.assign(state, partial);
  subscribers.forEach((callback) => callback(getState()));
}

export function subscribe(callback) {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
}

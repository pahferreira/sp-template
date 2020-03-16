import { createContext } from 'react';

// Initial State
export const initialState = {};

// Actions
export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default createContext(initialState);

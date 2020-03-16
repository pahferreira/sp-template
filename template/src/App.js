import React, { useReducer } from 'react';
import ContextDevTool from 'react-context-devtool';
// Contexts
import Context, { reducer, initialState } from './storage/Context';
// Router Component
import Routes from './routes';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ContextDevTool
        context={Context}
        id="generalContext"
        displayName="Context"
      />
      <Routes />
    </Context.Provider>
  );
}

export default App;

import React, { createContext, useContext, useReducer } from 'react';
import youtubeReducer, { initialState as youtubeInitialState } from './reducers/youtube';

const YoutubeContext = createContext({ ...youtubeInitialState });

const useYoutubeVideo = () => {
  const context = useContext(YoutubeContext);
  if (!context) {
    throw new Error("Can't use useYoutubeVideo with out a Provider");
  }
  return context;
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(youtubeReducer, youtubeInitialState);

  return (
    <YoutubeContext.Provider value={{ state, dispatch }}>
      {children}
    </YoutubeContext.Provider>
  );
};

export { useYoutubeVideo };

export default Provider;

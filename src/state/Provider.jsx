import React, { createContext, useContext, useReducer } from 'react';

import youtubeReducer, {
  initialState as youtubeInitialState,
} from './reducers/youtube/youtube';
import generalReducer, { initialState as generalInitialState } from './reducers/general';

const YoutubeContext = createContext({ ...youtubeInitialState });
const GeneralContext = createContext({ ...generalInitialState });

const useYoutubeVideo = () => {
  const context = useContext(YoutubeContext);
  if (!context) {
    throw new Error("Can't use useYoutubeVideo with out a Provider");
  }
  return context;
};

const useGeneral = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("Can't use useGeneral with out a Provider");
  }
  return context;
};

const Provider = ({ children }) => {
  const [youtubeState, youtubeDispatch] = useReducer(youtubeReducer, youtubeInitialState);
  const [generalState, generalDispatch] = useReducer(generalReducer, generalInitialState);

  return (
    <GeneralContext.Provider value={{ generalState, generalDispatch }}>
      <YoutubeContext.Provider value={{ youtubeState, youtubeDispatch }}>
        {children}
      </YoutubeContext.Provider>
    </GeneralContext.Provider>
  );
};

export { useYoutubeVideo, useGeneral };

export default Provider;

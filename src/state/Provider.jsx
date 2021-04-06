import React, { createContext, useContext, useReducer } from 'react';

import youtubeReducer, {
  initialState as youtubeInitialState,
} from './reducers/youtube/youtube';
import generalReducer, { initialState as generalInitialState } from './reducers/general';
import sessionReducer, { initialState as sessionInitialState } from './reducers/session';

const YoutubeContext = createContext({ ...youtubeInitialState });
const GeneralContext = createContext({ ...generalInitialState });
const SessionContext = createContext({ ...sessionInitialState });

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

const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("Can't use useSession with out a Provider");
  }
  return context;
};

const Provider = ({ children }) => {
  const [youtubeState, youtubeDispatch] = useReducer(youtubeReducer, youtubeInitialState);
  const [generalState, generalDispatch] = useReducer(generalReducer, generalInitialState);
  const [sessionState, sessionDispatch] = useReducer(sessionReducer, sessionInitialState);

  return (
    <GeneralContext.Provider value={{ generalState, generalDispatch }}>
      <YoutubeContext.Provider value={{ youtubeState, youtubeDispatch }}>
        <SessionContext.Provider value={{ sessionState, sessionDispatch }}>
          {children}
        </SessionContext.Provider>
      </YoutubeContext.Provider>
    </GeneralContext.Provider>
  );
};

export { useYoutubeVideo, useGeneral, useSession };

export default Provider;

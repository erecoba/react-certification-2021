import React, { useEffect, useLayoutEffect } from 'react';
import { HashRouter, Switch, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Provider, { useGeneral } from '../../state/Provider';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoDetailPage from '../../pages/VideoDetail';
import FavoritePage from '../../pages/Favorite';
import FavoriteDetailPage from '../../pages/FavoriteDetail';
import Private from '../Private';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import theme from '../../ui/theme';
import { clearLocal } from '../../utils/localstorage';

export function rotateBackground(body) {
  const xPercent = random(100);
  const yPercent = random(100);
  body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
}

function App() {
  useLayoutEffect(() => {
    const { body } = document;
    clearLocal();

    const intervalId = setInterval(() => rotateBackground(body), 3000);
    body.addEventListener('click', () => rotateBackground(body));

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', () => rotateBackground(body));
    };
  }, []);

  return (
    <Provider>
      <ThemeApp />
    </Provider>
  );
}

function Routing() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/videos/:idVideo">
          <VideoDetailPage />
        </Route>
        <Private exact path="/favorites">
          <FavoritePage />
        </Private>
        <Private exact path="/favorites/:idVideo">
          <FavoriteDetailPage />
        </Private>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {background && <Route exact path="/login" component={LoginPage} />}
    </>
  );
}

function ThemeApp() {
  const { generalState } = useGeneral();
  const stateTheme = generalState.theme;

  useEffect(() =>
    document.body.style.setProperty('background-image', theme[stateTheme].bodyBackground)
  );

  return (
    <ThemeProvider theme={theme[stateTheme]}>
      <HashRouter>
        <Layout>
          <Routing />
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

import React, { useEffect, useLayoutEffect } from 'react';
import { HashRouter, Switch, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Provider, { useGeneral } from '../../state/Provider';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoDetailPage from '../../pages/VideoDetail';
import FavoritePage from '../../pages/Favorite';
import FavoriteDetailPage from '../../pages/FavoriteDetail';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import theme from '../../ui/theme';
import { clearLocal } from '../../utils/localstorage';

function App() {
  useLayoutEffect(() => {
    const { body } = document;
    clearLocal();

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
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
        <AuthProvider>
          <Layout>
            <Routing />
            <Fortune />
          </Layout>
        </AuthProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Logo,
  LogoContainer,
  LogoName,
  SearchContainer,
  AvatarContainer,
  CheckToggleWrapper,
  CheckToggle,
  LabelCheckToggle,
  LabelCheckToggleFeat,
} from './Header.styled';

import Input from '../Input';
import Avatar from '../Avatar';
import SeachIcon from '../../ui/icons/Search';

import logo from '../../assets/img/wizeline-logo.png';

import { youtubeGetVideos, youtubeSearchVideos } from '../../state/actions/youtube';
import {
  setSearching,
  changeLightTheme,
  changeDarkTheme,
} from '../../state/actions/general';
import { useYoutubeVideo, useGeneral } from '../../state/Provider';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const retrieveVideosEffect = ({ searching, youtubeDispatch, hideSearcher }) => {
  if (hideSearcher) return;

  const retriveVideosFetch = async () => {
    if (searching && searching.trim()) {
      youtubeDispatch(await youtubeSearchVideos(searching));
    } else {
      youtubeDispatch(await youtubeGetVideos());
    }
  };
  retriveVideosFetch();
};

const Header = ({ hideSearcher }) => {
  const { youtubeDispatch } = useYoutubeVideo();
  const { generalState, generalDispatch } = useGeneral();
  const { searching, theme } = generalState;

  const [checkboxStatus, setCheckboxStatus] = useState(theme !== THEMES.LIGHT);
  const history = useHistory();

  useEffect(() => retrieveVideosEffect({ searching, youtubeDispatch, hideSearcher }), [
    searching,
    youtubeDispatch,
    hideSearcher,
  ]);

  const handleOnChecked = (event) => {
    if (event.target.checked) {
      generalDispatch(changeDarkTheme());
    } else {
      generalDispatch(changeLightTheme());
    }
    setCheckboxStatus(event.target.checked);
  };

  const handleOnChangeInput = (event) =>
    generalDispatch(setSearching(event.target.value));

  return (
    <Container>
      <LogoContainer onClick={() => history.push('/')} aria-label="logo-container">
        <Logo src={logo} alt="logo" />
        <LogoName>Wizevideo</LogoName>
      </LogoContainer>

      <SearchContainer>
        {!hideSearcher && (
          <Input
            placeholder="Buscar"
            icon={<SeachIcon />}
            value={searching}
            onChange={handleOnChangeInput}
          />
        )}
      </SearchContainer>

      <AvatarContainer>
        <CheckToggleWrapper>
          <CheckToggle
            type="checkbox"
            id="toggle-theme"
            checked={checkboxStatus}
            onChange={handleOnChecked}
          />
          <LabelCheckToggle htmlFor="toggle-theme" checked={checkboxStatus}>
            <LabelCheckToggleFeat checked={checkboxStatus} />
          </LabelCheckToggle>
        </CheckToggleWrapper>
        <Avatar clickable />
      </AvatarContainer>
    </Container>
  );
};

export default Header;

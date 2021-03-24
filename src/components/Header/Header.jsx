import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Logo,
  LogoContainer,
  LogoName,
  SearchContainer,
  AvatarContainer,
} from './Header.styled';

import Input from '../Input';
import Avatar from '../Avatar';
import SeachIcon from '../../ui/icons/Search';

import logo from '../../assets/img/wizeline-logo.png';

import { youtubeGetVideos, youtubeSearchVideos } from '../../state/actions/youtube';
import { setSearching } from '../../state/actions/general';
import { useYoutubeVideo, useGeneral } from '../../state/Provider';

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
  const { searching } = generalState;

  const history = useHistory();

  useEffect(() => retrieveVideosEffect({ searching, youtubeDispatch, hideSearcher }), [
    searching,
    youtubeDispatch,
    hideSearcher,
  ]);

  const handleOnChange = (event) => generalDispatch(setSearching(event.target.value));

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
            onChange={handleOnChange}
          />
        )}
      </SearchContainer>

      <AvatarContainer>
        <Avatar clickable />
      </AvatarContainer>
    </Container>
  );
};

export default Header;

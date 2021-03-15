import React, { useEffect, useState } from 'react';
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
import { useYoutubeVideo } from '../../state/Provider';

export const retrieveVideosEffect = ({ search, dispatch, hideSearcher }) => {
  if (hideSearcher) return;

  const retriveVideosFetch = async () => {
    if (search && search.trim()) {
      dispatch(await youtubeSearchVideos(search));
    } else {
      dispatch(await youtubeGetVideos());
    }
  };
  retriveVideosFetch();
};

const Header = ({ hideSearcher }) => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const { dispatch } = useYoutubeVideo();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => retrieveVideosEffect({ search, dispatch, hideSearcher }), [search]);

  const handleOnChange = (event) => setSearch(event.target.value);

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
            value={search}
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

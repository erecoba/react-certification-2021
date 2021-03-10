import React, { useEffect, useState } from 'react';
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

export const retrieveVideosEffect = ({ search, dispatch }) => {
  const retriveVideosFetch = async () => {
    if (search && search.trim()) {
      dispatch(await youtubeSearchVideos(search));
    } else {
      dispatch(await youtubeGetVideos());
    }
  };
  retriveVideosFetch();
};

const Header = () => {
  const [search, setSearch] = useState('');
  const { dispatch } = useYoutubeVideo();

  useEffect(() => retrieveVideosEffect({ search, dispatch }), [search]);

  const handleOnChange = (event) => setSearch(event.target.value);

  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
        <LogoName>Wizevideo</LogoName>
      </LogoContainer>

      <SearchContainer>
        <Input
          placeholder="Buscar"
          icon={<SeachIcon />}
          value={search}
          onChange={handleOnChange}
        />
      </SearchContainer>

      <AvatarContainer>
        <Avatar clickable />
      </AvatarContainer>
    </Container>
  );
};

export default Header;

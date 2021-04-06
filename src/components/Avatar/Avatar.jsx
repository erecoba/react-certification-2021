import React from 'react';
import { useLocation } from 'react-router';
import { Container, CustomLink, Image } from './Avatar.styled';

const Avatar = ({ clickable, url, children, isLink, onClick }) => {
  const location = useLocation();
  return (
    <>
      {isLink ? (
        <CustomLink to={{ pathname: '/login', state: { background: location } }}>
          <Container clickable={clickable}>
            {url ? <Image src={url} alt="avatar" /> : children}
          </Container>
        </CustomLink>
      ) : (
        <Container clickable={clickable} onClick={onClick}>
          {url ? <Image src={url} alt="avatar" /> : children}
        </Container>
      )}
    </>
  );
};

export default Avatar;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.base};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`;

const CustomLink = styled(Link)``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export { Container, CustomLink, Image };

import styled from 'styled-components';

const BlurBg = styled.div`
  filter: blur(1px);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.blurBackground};
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
`;
const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WelcomeText = styled.h1`
  color: ${({ theme }) => theme.label};
`;

const FormLabel = styled.strong`
  color: ${({ theme }) => theme.label};
`;

const FormButton = styled.button`
  width: 5rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.base};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  cursor: pointer;
`;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ErrorText = styled.div`
  color: ${({ theme }) => theme.error};
`;

export {
  BlurBg,
  Container,
  ImageWrapper,
  Image,
  WelcomeText,
  FormLabel,
  FormButton,
  ErrorWrapper,
  ErrorText,
};

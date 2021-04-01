import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import to from 'await-to-js';

import { useSession } from '../../state/Provider';
import { logIn } from '../../state/actions/session';
import LoginApi from '../../services/login.api';

import './Login.styles.css';
import {
  BlurBg,
  Container,
  ImageWrapper,
  Image,
  WelcomeText,
  FormLabel,
  FormButton,
  ErrorText,
  ErrorWrapper,
} from './Login.styled';

import logo from '../../assets/img/wizeline-logo.png';

const redirectEffect = ({ sessionState, history }) => {
  if (sessionState.user) {
    history.push('/');
  }
};

function LoginPage() {
  const history = useHistory();
  const { sessionState, sessionDispatch } = useSession();

  const [user, setUser] = useState(''); // TODO: REMOVE IT
  const [pass, setPass] = useState(''); // TODO: REMOVE IT
  const [missingError, setMissingError] = useState({
    show: false,
    message: 'Type user and password',
  });
  const [incorrectError, setIncorrectError] = useState({
    show: false,
    message: 'User or password incorrect',
  });

  useEffect(() => redirectEffect({ sessionState, history }), [sessionState, history]);

  function authenticate(event) {
    event.preventDefault();
    setMissingError({ ...missingError, show: false });
    setIncorrectError({ ...incorrectError, show: false });

    if (!user.trim() || !pass.trim()) {
      setMissingError({ ...missingError, show: true });
      return;
    }

    const launchLoginApp = async () => {
      const [err, res] = await to(LoginApi(user.trim(), pass.trim()));
      if (err) {
        setIncorrectError({ ...incorrectError, show: true });
      } else {
        sessionDispatch(logIn(res));
        history.push('/');
      }
    };
    launchLoginApp();
  }

  return (
    <>
      <BlurBg />
      <Container>
        <section className="login">
          <ImageWrapper>
            <Image src={logo} alt="logo" />
          </ImageWrapper>
          <WelcomeText>Welcome</WelcomeText>
          <form onSubmit={authenticate} className="login-form">
            <div className="form-group">
              <label htmlFor="username">
                <FormLabel>username </FormLabel>
                <input
                  required
                  type="text"
                  id="username"
                  value={user}
                  onChange={(event) => setUser(event.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <FormLabel>password </FormLabel>
                <input
                  required
                  type="password"
                  id="password"
                  value={pass}
                  onChange={(event) => setPass(event.target.value)}
                />
              </label>
            </div>
            <ErrorWrapper>
              {missingError.show && <ErrorText>{missingError.message}</ErrorText>}
              {incorrectError.show && <ErrorText>{incorrectError.message}</ErrorText>}
            </ErrorWrapper>
            <FormButton type="submit">Log in</FormButton>
          </form>
        </section>
      </Container>
    </>
  );
}

export default LoginPage;

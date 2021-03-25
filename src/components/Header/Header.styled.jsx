import styled, { css } from 'styled-components';

const $toggleHeight = 40;
const $toggleWidth = 90;
const $borderWidth = 4;
const $toggleBtnRadius = $toggleHeight - 14;

const $bgColorNight = '#3c4145';
const $borderColorNight = '#1c1c1c';
const $toggleBtnBgColorNight = '#fff';
const $toggleBtnBorderColorNight = '#e3e3c7';

const $bgColorDay = '#9ee3fb';
const $borderColorDay = '#86c3d7';
const $toggleBtnBgColorDay = '#ffdf6d';
const $toggleBtnBorderColorDay = '#e1c348';

const $cloudBorderColor = '#d3d3d3';
const $cloudBgColor = '#fff';

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 3rem;

  background-color: ${({ theme }) => theme.background};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #eaeaea;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  flex-grow: 1;
`;

const LogoName = styled.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${({ theme }) => theme.label};
`;

const SearchContainer = styled.div`
  flex-grow: 1;
`;
const AvatarContainer = styled.div`
  flex-grow: 1;
  margin-right: 5px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CheckToggleWrapper = styled.div`
  margin-right: 8px;
  @keyframes starry_star {
    50% {
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: #fff 20px -3px 0 0, #fff 2px 0px 0 1px,
        rgba(255, 255, 255, 0.1) 28px 8px 0 1px, #fff 22px 14px 0 0,
        rgba(255, 255, 255, 0.1) 10px 14px 0 1.5px, #fff 2px 18px 0 1px;
    }
  }
  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 100;
      transform: scale(1.1);
    }
    55% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(0.9);
    }
    100% {
      opacity: 100;
      transform: scale(1);
    }
  }
`;
const CheckToggle = styled.input`
  display: none;

  &,
  &:before,
  &:after {
    transition: all 250ms ease-in;
  }
  &:before,
  &:after {
    content: '';
    display: block;
  }
`;

const LabelCheckToggle = styled.label`
  display: block;
  margin: 0 auto;
  font-size: 1.4em;
  transition: all 350ms ease-in;
  &:hover {
    cursor: pointer;
  }
  /*  */
  &,
  &:before,
  &:after {
    transition: all 250ms ease-in;
  }
  &:before,
  &:after {
    content: '';
    display: block;
  }
  /*  */
  position: relative;
  height: ${$toggleHeight}px;
  width: ${$toggleWidth}px;
  border-radius: ${$toggleHeight}px;
  &:before {
    position: absolute;
    top: 2px;
    left: 4px;
    width: ${$toggleBtnRadius}px;
    height: ${$toggleBtnRadius}px;
    border-radius: 50%;
  }
  &:after {
    position: absolute;
    top: 62%;
    left: ${$toggleWidth - $toggleBtnRadius - $borderWidth * 2 - 20}px;
    z-index: 10;
    width: ${$toggleBtnRadius / 5}px;
    height: ${$toggleBtnRadius / 5}px;
    opacity: 0;
    background-color: ${$cloudBgColor};
    border-radius: 50%;
    box-shadow: ${$cloudBgColor} 0 0, ${$cloudBgColor} 3px 0, ${$cloudBgColor} 6px 0,
      ${$cloudBgColor} 9px 0, ${$cloudBgColor} 11px 0, ${$cloudBgColor} 14px 0,
      ${$cloudBgColor} 16px 0, ${$cloudBgColor} 21px -1px 0 1px,
      ${$cloudBgColor} 16px -7px 0 -2px, ${$cloudBgColor} 7px -7px 0 1px,
      ${$cloudBorderColor} 0 0 0 4px, ${$cloudBorderColor} 6px 0 0 4px,
      ${$cloudBorderColor} 11px 0 0 4px, ${$cloudBorderColor} 16px 0 0 4px,
      ${$cloudBorderColor} 21px -1px 0 5px, ${$cloudBorderColor} 16px -7px 0 1px,
      ${$cloudBorderColor} 7px -7px 0 5px;
    transition: opacity 100ms ease-in;
  }
  ${({ checked }) =>
    checked
      ? css`
          border: ${$borderWidth}px solid ${$borderColorNight};
          background-color: ${$bgColorNight};
          &:before {
            background-color: ${$toggleBtnBgColorNight};
            border: ${$borderWidth}px solid ${$toggleBtnBorderColorNight};
          }
        `
      : css`
          background-color: ${$bgColorDay};
          border: ${$borderWidth}px solid ${$borderColorDay};

          &:before {
            left: ${$toggleWidth - $toggleBtnRadius - $borderWidth * 2 - 4}px;
            background-color: ${$toggleBtnBgColorDay};
            border: ${$borderWidth}px solid ${$toggleBtnBorderColorDay};
          }
          &:after {
            opacity: 100;
            animation-name: bounceIn;
            animation-duration: 0.6s;
            animation-delay: 0.1s;
            animation-fill-mode: backwards;
            animation-timing-function: ease-in-out;
          }
        `}
`;

const LabelCheckToggleFeat = styled.span`
  &,
  &:before,
  &:after {
    transition: all 250ms ease-in;
  }
  &:before,
  &:after {
    content: '';
    display: block;
  }
  /*  */
  display: block;
  position: absolute;
  top: 9px;
  left: 52.5%;
  z-index: 20;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;

  ${({ checked }) =>
    checked
      ? css`
          box-shadow: rgba(255, 255, 255, 0.1) 20px -3px 0 0,
            rgba(255, 255, 255, 0.1) 2px 0px 0 1px, #fff 28px 8px 0 1px,
            rgba(255, 255, 255, 0.1) 22px 14px 0 0, #fff 10px 14px 0 1.5px,
            rgba(255, 255, 255, 0.1) 2px 18px 0 1px;
          animation: starry_star 5s ease-in-out infinite;
          &:before {
            position: absolute;
            top: -2px;
            left: -25px;
            width: 8px;
            height: 8px;
            background-color: ${$toggleBtnBgColorNight};
            border-radius: 50%;
            border: 1px solid ${$toggleBtnBorderColorNight};
            box-shadow: ${$toggleBtnBorderColorNight} -12px 0 0 -3px,
              ${$toggleBtnBorderColorNight} -8px 10px 0 -2px;
            transform-origin: -6px 130%;
          }
        `
      : css`
          opacity: 0;
          box-shadow: rgba(255, 255, 255, 0.1) 20px -3px 0 -4px,
            rgba(255, 255, 255, 0.1) 2px 0px 0 -5px, #fff 28px 8px 0 -3px,
            rgba(255, 255, 255, 0.1) 22px 24px 0 -4px, #fff 10px 14px 0 -5.5px,
            rgba(255, 255, 255, 0.1) 2px 28px 0 -3px;
          animation: none;

          &:before {
            left: 25px;
            transform: rotate(70deg);
          }
        `};
`;

export {
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
};

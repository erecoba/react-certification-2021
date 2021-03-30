import styled from 'styled-components';

const Container = styled.main`
  position: fixed;
  top: 3rem;
  left: 0;

  width: 100%;
  height: calc(100vh - 54px);

  overflow-y: auto;

  padding: 20px 35px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`;

const VideoContainer = styled.div`
  height: inherit;
  flex: 1;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

const VideoRelalatedContaier = styled.div`
  width: 300px;
  height: inherit;
  overflow-y: auto;

  padding: 20px 16px;

  position: relative;
`;

const TitleMayInterestYou = styled.span`
  color: ${({ theme }) => theme.label};
  font-size: 20px;
  font-weight: 700;

  position: absolute;
  top: 0;
  left: 16px;
`;

const TitleVideo = styled.span`
  color: ${({ theme }) => theme.label};
  font-size: 40px;
  font-weight: 700;
`;

const DescriptionVideo = styled.div`
  color: ${({ theme }) => theme.label};
  font-size: 1rem;
  font-weight: 500;
`;

const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RankingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

const LikesText = styled.span`
  font-size: 1rem;
  margin-right: 10px;
`;

export {
  Container,
  Wrapper,
  VideoContainer,
  VideoFrame,
  VideoRelalatedContaier,
  TitleMayInterestYou,
  TitleVideo,
  DescriptionVideo,
  DetailContainer,
  RankingContainer,
  LikesText,
};

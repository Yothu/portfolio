import styled from 'styled-components';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import data from '../../data/about.json';
import resume from '../../assets/files/resume-eng.docx';

const Container = styled.div`
  flex-basis: 18rem;
  flex-grow: 2;
  min-height: 100%;
`;

const Title = styled.h2`
  font-family: 'Source Code Pro', monospace;
  color: #7a00b2;
`;

const Description = styled.p`
  font-family: 'Source Code Pro', monospace;
  color: white;
`;

const Social = styled.div`
  color: white;
`;

const ButtonContainer = styled.div`
  padding: 1rem 0;
`;

const Resume = styled.button`
  background-color: transparent;
  border-color: white;
  border-radius: 3rem;
  cursor: pointer;
  padding: 1rem;

  align-items: center;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: 'Source Code Pro', monospace;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: white 0 0 0 3px, transparent 0 0 0 0;
  }

  & > a {
    text-decoration: none;
    color: white;
  }
`;

const Personal = () => (
  <Container>
    <Title>About Myself</Title>
    <Description>{data.description}</Description>
    <Social>
      <SocialMedia />
    </Social>
    <ButtonContainer>
      <Resume type="button">
        <a href={resume} download="DavidV-Resume">Get resume</a>
      </Resume>
    </ButtonContainer>
  </Container>
);

export default Personal;

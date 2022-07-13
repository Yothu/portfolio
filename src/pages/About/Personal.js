import styled from 'styled-components';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import data from '../../data/about.json';

const Container = styled.div`
  flex-basis: 18rem;
  flex-grow: 2;
  min-height: 100%;
`;

const Title = styled.h2`
  color: #7a00b2;
`;

const Description = styled.p`
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
  padding: 1rem;
  border-radius: 3rem;
  border-color: #e54ed0;
  color: #e54ed0;
`;

const Personal = () => (
  <Container>
    <Title>About Myself</Title>
    <Description>{data.description}</Description>
    <Social>
      <SocialMedia />
    </Social>
    <ButtonContainer>
      <Resume type="button">Get resume</Resume>
    </ButtonContainer>
  </Container>
);

export default Personal;

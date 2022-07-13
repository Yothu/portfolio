import styled from 'styled-components';
import Personal from './Personal';
import Abilities from './Abilities';

const Main = styled.main`
  background-image: linear-gradient(to bottom, #020b16, #072141);
  align-items: center;
  display: flex;
  flex-grow: 1;
`;

const FrontSection = styled.section`
  flex-wrap: wrap;
  margin: 0 1rem;
  display: flex;
`;

const About = () => (
  <Main>
    <FrontSection>
      <Personal />
      <Abilities />
    </FrontSection>
  </Main>
);

export default About;

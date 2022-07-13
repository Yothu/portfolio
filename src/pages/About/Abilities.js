import styled from 'styled-components';
import Languages from './Abilities/Languages';

const Container = styled.div`
  flex-basis: 25rem;
  flex-grow: 3;
`;

const Abilities = () => (
  <Container>
    <Languages />
  </Container>
);

export default Abilities;

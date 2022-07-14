import styled from 'styled-components';
import Languages from './Abilities/Languages';
import data from '../../data/about.json';

const Container = styled.div`
  flex-basis: 25rem;
  flex-grow: 3;
`;

const Abilities = () => (
  <Container>
    <Languages title="Languages" data={data.languages} />
    <Languages title="Frameworks" data={data.frameworks} />
    <Languages title="Skills" data={data.skills} />
  </Container>
);

export default Abilities;

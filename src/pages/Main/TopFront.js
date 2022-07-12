import styled from 'styled-components';
import data from '../../data/front-page.json';

const Title = styled.h1`
  font-family: 'Source Code Pro', monospace;
  color: #f55800;
  font-size: 2.2rem;
  margin: 0;

  @media (min-width: 425px) {
    font-size: 3rem;
  }
`;

const TopFront = () => (
  <div>
    <Title>{data.topTitle}</Title>
    <Title>{data.bottomTitle}</Title>
  </div>
);

export default TopFront;

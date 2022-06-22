import styled from 'styled-components';
import data from '../../data/front-page.json';

const Title = styled.h1`
  font-family: 'Source Code Pro', monospace;
  font-size: 3rem;
  color: #f55800;
  margin: 0;
`;

const TopFront = () => (
  <div>
    <Title>{data.topTitle}</Title>
    <Title>{data.bottomTitle}</Title>
  </div>
);

export default TopFront;

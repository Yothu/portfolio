import styled from 'styled-components';
import data from '../../data/front-page.json';

const Job = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff5e1;
`;

const Description = styled.p`
  color: #fff;
`;

const BottomFront = () => (
  <div>
    <Job>{data.job}</Job>
    <Description>{data.description}</Description>
  </div>
);

export default BottomFront;

import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  color: #f55800;
`;

const Name = styled.span`
  color: #f55800;
`;

const TopFront = () => (
  <div>
    <Title>Welcome!</Title>
    <Name>I am David</Name>
  </div>
);

export default TopFront;

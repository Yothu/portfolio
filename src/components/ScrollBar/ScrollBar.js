import styled from 'styled-components';

const OuterContainer = styled.nav`
  background-color: red;
  overflow-x: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  top: 25%;
  text-align: center;
  margin-top: 30px;
`;

const ScrollBar = () => (
  <OuterContainer>
    <InnerContainer>
      asd
    </InnerContainer>
  </OuterContainer>
);

export default ScrollBar;

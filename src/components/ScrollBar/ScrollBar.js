import styled from 'styled-components';
import Proptypes from 'prop-types';
import cross from '../../assets/images/exit-icon.svg';
import './ScrollBar.css';

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

const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const ScrollBar = ({ menuState, setMenuState }) => {
  const closeMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <OuterContainer
      style={{
        width: menuState ? '100%' : '0',
      }}
    >
      <CloseButton onClick={closeMenu} type="button">
        <img src={cross} alt="exit-icon" className="exit-icon" />
      </CloseButton>
      <InnerContainer>asd</InnerContainer>
    </OuterContainer>
  );
};

ScrollBar.propTypes = {
  menuState: Proptypes.bool.isRequired,
  setMenuState: Proptypes.func.isRequired,
};

export default ScrollBar;

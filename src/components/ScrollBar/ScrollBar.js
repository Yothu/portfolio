import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import './ScrollBar.css';
import { BsXLg } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const OuterContainer = styled.nav`
  background-image: linear-gradient(to bottom, #020b16, #072141);
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: transparent 2px solid;
  padding: 0.5rem;
  cursor: pointer;
  margin: 1rem;
  align-self: flex-end;
  transition: border 0.5s;
  transition: border-radius 0.5s;
  display: flex;
  justify-content: end;

  &:hover {
    border: white 2px groove;
    border-radius: 50%;
  }
`;

const Links = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
      <InnerContainer>
        <CloseButton onClick={closeMenu} type="button">
          <IconContext.Provider value={{ size: 30, color: 'white' }}>
            <BsXLg />
          </IconContext.Provider>
        </CloseButton>
        <Links>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Main
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            About
          </NavLink>
        </Links>
      </InnerContainer>
    </OuterContainer>
  );
};

ScrollBar.propTypes = {
  menuState: Proptypes.bool.isRequired,
  setMenuState: Proptypes.func.isRequired,
};

export default ScrollBar;

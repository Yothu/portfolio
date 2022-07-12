import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import Proptypes from 'prop-types';
import ScrollBar from '../ScrollBar/ScrollBar';

const Navbar = styled.nav`
  display: flex;
  padding: 0rem 1rem;
  align-items: center;
  background-color: #020b16;
  justify-content: space-between;
`;

const NavTitle = styled.span`
  color: #fff;
`;

const Menu = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const Header = ({ menuState, setMenuState }) => {
  const IconStyle = {
    color: 'white',
    margin: '0.3rem 0rem',
  };

  const openMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <header>
      <Navbar>
        <NavTitle>David Vergaray</NavTitle>
        <Menu onClick={openMenu}>
          <IconContext.Provider value={{ size: 40, style: IconStyle }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </Menu>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  menuState: Proptypes.bool.isRequired,
  setMenuState: Proptypes.func.isRequired,
};

export default Header;

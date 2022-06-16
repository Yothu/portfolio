import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = styled.nav`
display: flex;
padding: 0rem 1rem;
align-items: center;
background-color: #3e3c3c;
justify-content: space-between;
`;

const NavTitle = styled.span`
color: #fff;
`;

const Header = () => {
  const IconStyle = {
    color: 'white',
    margin: '0.3rem 0rem',
  };

  return (
    <header>
      <Navbar>
        <NavTitle>David Vergaray</NavTitle>
        <IconContext.Provider value={{ size: 40, style: IconStyle }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </Navbar>
    </header>
  );
};

export default Header;

import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

const Navbar = styled.nav`
  display: flex;
  padding: 0.2rem;
  align-items: center;
  background-color: #3e3c3c;
  justify-content: space-between;
`;

const NavTitle = styled.span`
  color: #fff;
  margin: 0rem 0.2rem;
`;

const Main = styled.main`
  background-color: blue;
`;

const Title = styled.h1`
  margin: 0;
  color: #f55800;
`;

const Name = styled.span`
  color: #f55800;
`;

const FrontSection = styled.section`
  background-color: #000;
  height: 100vh;
`;

const MainPage = () => {
  const IconStyle = {
    color: 'white',
    margin: '0.3rem',
  };

  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <header>
        <Navbar>
          <NavTitle>David Vergaray</NavTitle>
          <IconContext.Provider value={{ size: 40, style: IconStyle }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </Navbar>
      </header>
      <Main>
        <FrontSection>
          <div>
            <Title>Welcome!</Title>
            <Name>I am David</Name>
          </div>
        </FrontSection>
      </Main>
    </>
  );
};

export default MainPage;

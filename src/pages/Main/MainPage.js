import styled from 'styled-components';
import { BsGithub, BsLinkedin, BsFolderFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

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

const Job = styled.span`
  color: #fff;
`;

const Description = styled.p`
  color: #fff;
`;

const FrontSection = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #1c1a19;
  padding: 0 1rem;
`;

const FrontContainer = styled.div`
  margin: 0.5rem;
  margin: 3rem 0;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MainPage = () => {
  const IconStyle = {
    color: 'white',
    margin: '0.3rem 0rem',
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
          <FrontContainer>
            <div>
              <Title>Welcome!</Title>
              <Name>I am David</Name>
            </div>
            <div>
              <Job>I am a Web Developer</Job>
              <Description>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Description>
            </div>
            <SocialMediaContainer>
              <IconContext.Provider value={{ size: 30, style: IconStyle }}>
                <BsGithub />
                <BsLinkedin />
                <BsFolderFill />
              </IconContext.Provider>
            </SocialMediaContainer>
          </FrontContainer>
        </FrontSection>
      </Main>
    </>
  );
};

export default MainPage;

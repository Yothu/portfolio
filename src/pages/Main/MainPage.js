import styled from 'styled-components';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Header from '../../components/Header/Header';
import TopFront from './TopFront';
import BottomFront from './BottomFront';
import MyWorks from '../MyWorks/MyWorks';
import Planet from '../../components/Planet/Planet';

const Main = styled.main`
  background-color: black;
`;

// const FrontSection = styled.section`
//   background-image: linear-gradient(to bottom, #020B16, #072141);
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   min-height: 100vh;
//   padding: 0 1rem;
//   display: flex;
// `;

const FrontSection = styled.section`
  background-image: linear-gradient(to bottom, #020B16, #072141);
  grid-template-columns: 50% 50%;
  min-height: 100vh;
  display: grid;
`;

const FrontContainer = styled.div`
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 2rem;
`;

const MainPage = () => (
  <>
    <Header />
    <Main>
      <FrontSection>
        <FrontContainer>
          <TopFront />
          <BottomFront />
          <SocialMedia />
        </FrontContainer>
        <Planet />
      </FrontSection>
    </Main>
    <MyWorks />
  </>
);

export default MainPage;

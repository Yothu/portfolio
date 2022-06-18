import styled from 'styled-components';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Header from '../../components/Header/Header';
import TopFront from './TopFront';
import BottomFront from './BottomFront';
import MyWorks from '../MyWorks/MyWorks';

const Main = styled.main`
  background-color: black;
`;

const FrontSection = styled.section`
  border-radius: 0 0 0 40px;
  background-color: #1c1a19;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 1rem;
  display: flex;
`;

const FrontContainer = styled.div`
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  margin: 3rem 0;
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
      </FrontSection>
    </Main>
    <MyWorks />
  </>
);

export default MainPage;

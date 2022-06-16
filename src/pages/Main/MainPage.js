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
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #1c1a19;
  padding: 0 1rem;
  border-radius: 0 0 0 40px;
`;

const FrontContainer = styled.div`
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

import { Route, Routes } from 'react-router';
import styled from 'styled-components';
import MainPage from './pages/Main/MainPage';
import ScrollBar from './components/ScrollBar/ScrollBar';

const WholePage = styled.div`
  margin: 0;
`;

const App = () => (
  <WholePage>
    <ScrollBar />
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </WholePage>
);

export default App;

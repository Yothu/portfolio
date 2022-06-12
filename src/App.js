import { Route, Routes } from 'react-router';
import styled from 'styled-components';
import MainPage from './pages/Main/MainPage';

const WholePage = styled.div`
  margin: 0;
`;

const App = () => (
  <WholePage>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </WholePage>
);

export default App;

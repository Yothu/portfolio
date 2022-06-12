import { Route, Routes } from 'react-router';
import styled from 'styled-components';
import Main from './pages/Main/Main';

const WholePage = styled.div``;

const App = () => (
  <WholePage>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </WholePage>
);

export default App;

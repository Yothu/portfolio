import { Route, Routes } from 'react-router';
import styled from 'styled-components';
import { useState } from 'react';
import MainPage from './pages/Main/MainPage';
import ScrollBar from './components/ScrollBar/ScrollBar';
import Header from './components/Header/Header';

const WholePage = styled.div`
  margin: 0;
`;

const App = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <WholePage>
        <ScrollBar menuState={menuState} setMenuState={setMenuState} />
        <Header menuState={menuState} setMenuState={setMenuState} />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </WholePage>
    </>
  );
};

export default App;

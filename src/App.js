import { Route, Routes } from 'react-router';
import styled from 'styled-components';
import { useState } from 'react';
import MainPage from './pages/Main/MainPage';
import ScrollBar from './components/ScrollBar/ScrollBar';
import Header from './components/Header/Header';
import About from './pages/About/About';

const WholePage = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
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
          <Route path="/about" element={<About />} />
        </Routes>
      </WholePage>
    </>
  );
};

export default App;

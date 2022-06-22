import styled from 'styled-components';
import planet from '../../assets/images/Hello-World-earth.svg';
import satelite from '../../assets/images/Satelite.svg';
import './planet.css';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layer = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  height: 50vw;
  width: 50vw;
  max-width: 75vh;
  max-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Planet = () => (
  <Container>
    <Layer className="layer">
      <img src={planet} alt="planet" className="planet" />
      <img src={satelite} alt="satelite" className="satelite-3" />
    </Layer>
    <img src={satelite} alt="satelite" className="satelite-1" />
    <img src={satelite} alt="satelite" className="satelite-2" />
  </Container>
);

export default Planet;

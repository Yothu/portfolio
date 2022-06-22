import planet from '../../assets/images/Hello-World-earth.svg';
import './planet.css';

const Planet = () => (
  <div>
    <img src={planet} alt="planet" className="planet" />
  </div>
);

export default Planet;

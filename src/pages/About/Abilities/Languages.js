import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import { useState } from 'react';
import '../abilities.css';
import PropTypes from 'prop-types';

const SubContainer = styled.div`
  padding: 0rem 1rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  color: white;
  border: 1px solid white;
`;

const Slide = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const SubTitle = styled.h3``;

const Elements = styled.div`
  display: flex;
  height: 6rem;
  transition: height 0.3s;
  overflow: hidden;

  /* &:active {
    height: 0rem;
  } */
`;

const Name = styled.p`
  color: white;
`;

const Languages = ({ title, data }) => {
  const [langSlide, setLangSlide] = useState(false);
  const [clickStyle, setclickStyle] = useState('7rem');

  const clickLanguage = () => {
    setLangSlide(!langSlide);
    if (clickStyle === '7rem') {
      setclickStyle('0');
    }
  };

  return (
    <div>
      <SubContainer>
        <SubTitle>{title}</SubTitle>
        <Slide onClick={clickLanguage}>
          <IconContext.Provider value={{ size: 20, color: 'white' }}>
            {langSlide ? <BsChevronDown /> : <BsChevronRight />}
          </IconContext.Provider>
        </Slide>
      </SubContainer>
      <Elements style={{ height: langSlide ? '7rem' : '0rem' }}>
        {data.map((element) => (
          <div key={element.name}>
            <img
              src={element.icon}
              alt={element.alt}
              className="about-icon"
            />
            <Name>{element.name}</Name>
          </div>
        ))}
      </Elements>
    </div>
  );
};

Languages.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
};

export default Languages;

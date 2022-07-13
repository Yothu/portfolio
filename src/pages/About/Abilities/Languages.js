import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import { useState } from 'react';
import data from '../../../data/about.json';
import '../abilities.css';

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

const Elements = styled.div``;

const Name = styled.p`
  color: white;
`;

const Languages = () => {
  const [langSlide, setLangSlide] = useState(false);

  const clickLanguage = () => {
    setLangSlide(!langSlide);
  };

  return (
    <div>
      <SubContainer>
        <SubTitle>Languages</SubTitle>
        <Slide onClick={clickLanguage}>
          <IconContext.Provider value={{ size: 20, color: 'white' }}>
            {langSlide ? <BsChevronDown /> : <BsChevronRight />}
          </IconContext.Provider>
        </Slide>
      </SubContainer>
      <Elements>
        {data.languages.map((language) => (
          <div key={language.name}>
            <img
              src={language.icon}
              alt={language.alt}
              className="about-icon"
            />
            <Name>{language.name}</Name>
          </div>
        ))}
      </Elements>
    </div>
  );
};

export default Languages;

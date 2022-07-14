import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import { useState } from 'react';
import '../abilities.css';
import PropTypes from 'prop-types';

const Container = styled.div`
  font-family: 'Source Code Pro', monospace;
`;

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
  transition: height 0.3s;
  align-items: center;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  background-color: #ffe7f7;
`;

const Lang = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-grow: 1;
`;

const Name = styled.p`
  color: black;
`;

const Languages = ({ title, data }) => {
  const [langSlide, setLangSlide] = useState(false);

  const clickLanguage = () => {
    setLangSlide(!langSlide);
  };

  return (
    <Container>
      <SubContainer>
        <SubTitle>{title}</SubTitle>
        <Slide onClick={clickLanguage}>
          <IconContext.Provider value={{ size: 20, color: 'white' }}>
            {langSlide ? <BsChevronDown /> : <BsChevronRight />}
          </IconContext.Provider>
        </Slide>
      </SubContainer>
      <Elements style={{ height: langSlide ? '8.5rem' : '0rem' }}>
        {data.map((element) => (
          <Lang key={element.name}>
            <img
              src={element.icon}
              alt={element.alt}
              className="about-icon"
            />
            <Name>{element.name}</Name>
          </Lang>
        ))}
      </Elements>
    </Container>
  );
};

Languages.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
};

export default Languages;

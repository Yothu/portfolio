import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BiRadioCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 1rem;
  width: 21rem;
  height: 40rem;
  padding: 1rem;
`;

const ImageContainer = styled.div`
  height: 40%;
  border: 1px solid black;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

const ExtraInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LanguagesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Language = styled.span`
  background-color: #ebebff;
  border-radius: 0.5rem;
  padding: 0.25rem 0.75rem;
`;

const ProjectButton = styled.button`
  background-color: #ebebff;
  border-radius: 0.5rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid black;
  cursor: pointer;
  margin: 1rem 0;
`;

const WorkCard = ({ data }) => {
  const {
    title, image, languages, description, date, company, type,
  } = data;
  return (
    <Card>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <div>
        <h2>{title}</h2>
        <ExtraInfo>
          <span>{company}</span>
          <IconContext.Provider value={{ size: 15 }}>
            <BiRadioCircle />
          </IconContext.Provider>
          <span>{type}</span>
          <IconContext.Provider value={{ size: 15 }}>
            <BiRadioCircle />
          </IconContext.Provider>
          <span>{date}</span>
        </ExtraInfo>
        <p>{description}</p>
      </div>
      <LanguagesContainer>
        {languages.map((language) => (
          <Language key={language}>{language}</Language>
        ))}
      </LanguagesContainer>
      <ProjectButton>View project</ProjectButton>
    </Card>
  );
};

WorkCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkCard;

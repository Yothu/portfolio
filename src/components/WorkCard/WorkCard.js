import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BiRadioCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const Card = styled.div`
  font-family: 'Poppins', sans-serif;
  justify-content: space-between;
  border: 1px solid #dfe1e6;
  background-color: white;
  flex-direction: column;
  border-radius: 1rem;
  height: 40rem;
  display: flex;
  padding: 1rem;
  width: 21rem;
`;

const TopContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

const ImageContainer = styled.div`
  border: 1px solid #dfe1e6;
  border-radius: 1rem;
  height: 16rem;
`;

const Image = styled.img`
  border-radius: 1rem;
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  color: #172b4d;
`;

const ExtraInfo = styled.div`
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #7A869a;
  display: flex;
  gap: 0.2rem;
`;

const Company = styled.span`
  color: #344563;
`;

const Description = styled.p`
  color: #344563;
  font-size: 1rem;
  line-height: 24px;
`;

const BottomContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

const LanguagesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Language = styled.span`
  background-color: #ebebff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  color: #6070ff;
`;

const ProjectButton = styled.button`
  background-color: white;
  border: 1px solid #396df2;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem 0 0 0;
  color: #396df2;
  padding: 1rem;
`;

const WorkCard = ({ data }) => {
  const {
    title, image, languages, description, date, company, type,
  } = data;
  return (
    <Card>
      <TopContainer>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <div>
          <Title>{title}</Title>
          <ExtraInfo>
            <Company>{company}</Company>
            <IconContext.Provider value={{ size: 15 }}>
              <BiRadioCircle />
            </IconContext.Provider>
            <span>{type}</span>
            <IconContext.Provider value={{ size: 15 }}>
              <BiRadioCircle />
            </IconContext.Provider>
            <span>{date}</span>
          </ExtraInfo>
          <Description>{description}</Description>
        </div>
      </TopContainer>
      <BottomContainer>
        <LanguagesContainer>
          {languages.map((language) => (
            <Language key={language}>{language}</Language>
          ))}
        </LanguagesContainer>
        <ProjectButton>View project</ProjectButton>
      </BottomContainer>
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

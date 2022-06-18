import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';
import { FiGithub } from 'react-icons/fi';
import { BiRadioCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const Card = styled.div`
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  justify-content: space-between;
  border: 1px solid #dfe1e6;
  background-color: white;
  flex-direction: column;
  border-radius: 1rem;
  min-height: 40rem;
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
margin-bottom: 0rem;
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
  line-height: 24px;
  font-size: 1rem;
  color: #344563;
`;

const BottomContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

const LanguagesContainer = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  gap: 0.5rem;
`;

const Language = styled.span`
  background-color: #ebebff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  color: #6070ff;
`;

const ButtonsContainer = styled.div`
  justify-content: space-between;
  display: flex;
  gap: 1rem;
`;

const ProjectButton = styled.a`
  border: 2px solid #396df2;
  background-color: white;
  justify-content: center;
  border-radius: 0.5rem;
  align-items: center;
  margin: 1rem 0 0 0;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  color: #396df2;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  text-decoration: none;

  &:hover {
    background-color: #396df2;
    color: white;
  }
`;

const WorkCard = ({ data }) => {
  const {
    title, image, technologies, description, date, company, type, source, live,
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
          {technologies.map((technology) => (
            <Language key={technology}>{technology}</Language>
          ))}
        </LanguagesContainer>
        <ButtonsContainer>
          <IconContext.Provider value={{ size: 25 }}>
            {source && (
              <ProjectButton href={source} target="_blank" rel="noopener noreferrer">
                <CgEnter />
                <span>Source</span>
              </ProjectButton>
            )}
            {live && (
              <ProjectButton href={live} target="_blank" rel="noopener noreferrer">
                <FiGithub />
                <span>Live</span>
              </ProjectButton>
            )}
          </IconContext.Provider>
        </ButtonsContainer>
      </BottomContainer>
    </Card>
  );
};

WorkCard.propTypes = {
  data: PropTypes.shape({
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkCard;

import styled from 'styled-components';
import works from '../../data/projects.json';
import WorkCard from '../../components/WorkCard/WorkCard';

const WorksSection = styled.section`
  background-color: #f7f7f9;
  padding: 4rem 1rem;
`;

const TitleContainer = styled.nav`
  justify-content: center;
  margin-bottom: 3rem;
  display: flex;
`;

const Title = styled.h2`
  font-family: 'Crete Round', serif;
  font-size: 2.5rem;
  color: #1c1a19;
`;

const WorksContainer = styled.div`
  align-content: space-evenly;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  gap: 2rem;
`;

const MyWorks = () => (
  <WorksSection>
    <TitleContainer>
      <Title>My recent works</Title>
    </TitleContainer>
    <WorksContainer>
      {
        works.details.map((work) => (
          <WorkCard data={work} key={work.id} />
        ))
      }
    </WorksContainer>
  </WorksSection>
);

export default MyWorks;

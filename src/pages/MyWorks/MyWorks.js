import styled from 'styled-components';
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
  gap: 1rem;
`;

const works = [
  {
    id: 1,
    title: 'work1',
    image: 'https://img.icons8.com/doodle/344/menu.png',
    languages: ['html', 'css', 'Javascript'],
    description: 'very loong description very loong description very loong description very loong description very loong description',
    date: '2015',
    company: 'company1',
    type: 'type1',
  },
  {
    id: 2,
    title: 'work1',
    image: 'https://img.icons8.com/ios-filled/344/top-menu.png',
    languages: ['html', 'css', 'Javascript'],
    description: 'very loong description very loong description very loong description very loong description very loong description',
    date: '2015',
    company: 'company1',
    type: 'type1',
  },
  {
    id: 3,
    title: 'work1',
    image: 'https://img.icons8.com/ios/344/user-menu-female.png',
    languages: ['html', 'css', 'Javascript'],
    description: 'very loong description very loong description very loong description very loong description very loong description',
    date: '2015',
    company: 'company1',
    type: 'type1',
  },
  {
    id: 4,
    title: 'work1',
    image: 'https://img.icons8.com/clouds/344/user-menu-female.png',
    languages: ['html', 'css', 'Javascript'],
    description: 'very loong description very loong description very loong description very loong description very loong description',
    date: '2015',
    company: 'company1',
    type: 'type1',
  },
];

const MyWorks = () => (
  <WorksSection>
    <TitleContainer>
      <Title>My recent works</Title>
    </TitleContainer>
    <WorksContainer>
      {
        works.map((work) => (
          <WorkCard data={work} key={work.id} />
        ))
      }
    </WorksContainer>
  </WorksSection>
);

export default MyWorks;

import styled from 'styled-components';
import { BsGithub, BsLinkedin, BsFolderFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import data from '../../data/front-page.json';

const SocialMediaContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  flex-direction: column;
  color: white;
  display: flex;
  gap: 1rem;
`;

const InnerSocial = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`

`;

const SocialMedia = () => {
  const IconStyle = {
    color: 'white',
    margin: '0.3rem 0rem',
  };

  return (
    <SocialMediaContainer>
      <span>Contact me!</span>
      <InnerSocial>
        <IconContext.Provider value={{ size: 30, style: IconStyle }}>
          <SocialLink href={data.social.github} target="_blank" rel="noopener noreferrer"><BsGithub /></SocialLink>
          <SocialLink href={data.social.linkedin} target="_blank" rel="noopener noreferrer"><BsLinkedin /></SocialLink>
          <SocialLink href={data.social.portfolio} target="_blank" rel="noopener noreferrer"><BsFolderFill /></SocialLink>
        </IconContext.Provider>
      </InnerSocial>
    </SocialMediaContainer>

  );
};

export default SocialMedia;

import styled from 'styled-components';
import { BsGithub, BsLinkedin, BsFolderFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialMedia = () => {
  const IconStyle = {
    color: 'white',
    margin: '0.3rem 0rem',
  };

  return (
    <SocialMediaContainer>
      <IconContext.Provider value={{ size: 30, style: IconStyle }}>
        <BsGithub />
        <BsLinkedin />
        <BsFolderFill />
      </IconContext.Provider>
    </SocialMediaContainer>

  );
};

export default SocialMedia;

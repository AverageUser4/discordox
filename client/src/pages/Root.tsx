import { ArtworkContainer, Background, Text, CenteredBlock } from 'src/features/ui';
import { Header } from 'src/features/webpage';
import { OpenInBrowser } from 'src/features/auth';

function Component() {
  return (
    <Background>
      <ArtworkContainer>
        <Header/>
        
        <CenteredBlock>
          <Text element="h1" fontFamily={1} fontSize={1} style={{ textAlign: 'center' }}>IMAGINE A PLACE</Text>
          <Text element="p" fontSize={0} style={{ textAlign: 'center', margin: '12px 0 32px' }}>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</Text>
          <OpenInBrowser/>
        </CenteredBlock>
      </ArtworkContainer>
    </Background>
  );
}

export { Component };
import { RegisterForm } from 'src/features/auth';
import { ArtworkContainer, Background, Text, Anchor, CenteringContainer } from "src/features/ui";
import { FloatingCard } from 'src/features/ui/components/FloatingCard/FloatingCard';

function Component() {
  return (
    <Background>
      <ArtworkContainer kind={1}>
        <CenteringContainer>
          <FloatingCard>
            <Text 
              element="h1"
              style={{ fontSize: 24, textAlign: 'center', fontWeight: 600 }}
            >
              Create an account
            </Text>

            <RegisterForm style={{ margin: '20px 0 6px' }}/>

            <Text
              colorScheme={3}
              style={{ fontSize: 14 }}
            >
              <Anchor colorScheme={1} kind={1} href="/login">Already have an account?</Anchor>
            </Text>
          </FloatingCard>
        </CenteringContainer>
      </ArtworkContainer>
    </Background>
  );
}

export { Component };
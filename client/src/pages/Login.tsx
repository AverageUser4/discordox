import { LoginForm } from 'src/features/auth';
import { ArtworkContainer, Background, Text, Anchor, CenteringContainer } from "src/features/ui";
import { FloatingCard } from 'src/features/ui/components/FloatingCard/FloatingCard';

function Login() {
  return (
    <Background>
      <ArtworkContainer kind={1}>
        <CenteringContainer>
          <FloatingCard>
            <Text 
              element="h1"
              style={{ fontSize: 24, textAlign: 'center', fontWeight: 600 }}
            >
              Welcome back!
            </Text>
            <Text
              element="p"
              style={{ fontSize: 16, textAlign: 'center' }}
              colorScheme={1}
            >
              We're so excited to see you again!
            </Text>

            <LoginForm style={{ margin: '20px 0 6px' }}/>

            <Text
              colorScheme={3}
              style={{ fontSize: 14 }}
            >
              Need an account? <Anchor colorScheme={1} kind={1} href="/register">Register</Anchor>
            </Text>
          </FloatingCard>
        </CenteringContainer>
      </ArtworkContainer>
    </Background>
  );
}

export default Login;
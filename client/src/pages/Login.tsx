import css from './tempLogin.module.css';
import { ArtworkContainer, Background, Input, Label, Text, Button, Anchor } from "src/features/ui";

function Login() {
  return (
    <Background>
      <ArtworkContainer kind={1}>
        <div className={css['centering-container']}>
          <div className={css['form-container']}>

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

            <form className={css['form']}>
              <Label kind={1}>
                <Text
                  colorScheme={1}
                  style={{ fontSize: 12, fontWeight: 700 }}
                >
                  EMAIL OR PHONE NUMBER <Text colorScheme={2}>*</Text>
                </Text>
                <Input colorScheme={1} value={1} setValue={()=>0}/>
              </Label>

              <Label kind={1}>
                <Text
                  colorScheme={1}
                  style={{ fontSize: 12, fontWeight: 700 }}
                >
                  PASSWORD <Text colorScheme={2}>*</Text>
                </Text>
                <Input colorScheme={1} type="password" value={1} setValue={()=>0}/>
              </Label>

              <Button look="link" colorScheme={1} kind={1} style={{ fontSize: 14 }}>Forgot your password?</Button>

              <Button kind={1} colorScheme={3}>Log In</Button>
            </form>

            <Text
              colorScheme={3}
              style={{ fontSize: 14 }}
            >
              Need an account? <Anchor colorScheme={1} kind={1} href="/register">Register</Anchor>
            </Text>
      
          </div>
        </div>
      </ArtworkContainer>
    </Background>
  );
}

export default Login;
import { Input, Label, Text, Button } from "src/features/ui";

interface Props {
  style?: React.CSSProperties,
}

function LoginForm({ style } : Props) {
  return (
    <form style={style} data-cy="LoginForm">
      <Label style={{ marginBottom: 16 }} kind={1} dataCy="LoginFormLabelEmail">
        <Text
          colorScheme={1}
          style={{ fontSize: 12, fontWeight: 700 }}
        >
          EMAIL <Text colorScheme={2}>*</Text>
        </Text>
        <Input colorScheme={1} value={1} setValue={()=>0} type="email" dataCy="LoginFormInputEmail"/>
      </Label>

      <Label style={{ marginBottom: 4 }} kind={1} dataCy="LoginFormLabelPassword">
        <Text
          colorScheme={1}
          style={{ fontSize: 12, fontWeight: 700 }}
        >
          PASSWORD <Text colorScheme={2}>*</Text>
        </Text>
        <Input colorScheme={1} type="password" value={1} setValue={()=>0} dataCy="LoginFormInputPassword"/>
      </Label>

      <Button look="link" colorScheme={1} kind={1} style={{ fontSize: 14 }} dataCy="LoginFormButtonForgotPassword">Forgot your password?</Button>

      <Button style={{ width: '100%', marginTop: 16 }} kind={1} colorScheme={3} dataCy="LoginFormButtonSubmit">Log In</Button>
    </form>
  );
}

export { LoginForm };
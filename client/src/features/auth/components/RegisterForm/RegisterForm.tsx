import { useState } from 'react';
import { Input, Label, Text, Button, Checkbox, Anchor } from "src/features/ui";

interface Props {
  style?: React.CSSProperties,
}

function RegisterForm({ style } : Props) {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isEmailsChecked, setIsEmailsChecked] = useState(false);
  
  return (
    <form style={style}>
      <Label style={{ marginBottom: 16 }} kind={1}>
        <Text
          colorScheme={1}
          style={{ fontSize: 12, fontWeight: 700 }}
        >
          EMAIL <Text colorScheme={2}>*</Text>
        </Text>
        <Input colorScheme={1} value={1} setValue={()=>0}/>
      </Label>

      <Label style={{ marginBottom: 16 }} kind={1}>
        <Text
          colorScheme={1}
          style={{ fontSize: 12, fontWeight: 700 }}
        >
          USERNAME <Text colorScheme={2}>*</Text>
        </Text>
        <Input colorScheme={1} type="password" value={1} setValue={()=>0}/>
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

      <Label kind={2} style={{ margin: '16px 0 8px' }}>
        <Checkbox
          kind={1}
          isChecked={isAgreementChecked}
          setIsChecked={setIsAgreementChecked}
        />
        <Text colorScheme={4} style={{ fontSize: 12, userSelect: 'none' }}>
          I have read and agree to Discord's <Anchor kind={1} colorScheme={1} href="/">Terms of Service</Anchor> and <Anchor kind={1} colorScheme={1} href="/">Privacy Policy</Anchor>.
        </Text>
      </Label>

      <Label kind={2} style={{ margin: '8px 0 16px' }}>
        <Checkbox
          kind={1}
          isChecked={isEmailsChecked}
          setIsChecked={setIsEmailsChecked}
        />
        <Text colorScheme={3} style={{ fontSize: 12, userSelect: 'none' }}>
          (Optional) It’s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.
        </Text>
      </Label>

      <Button style={{ width: '100%', marginTop: 16 }} kind={1} colorScheme={3}>Continue</Button>
    </form>
  );
}

export { RegisterForm };
import { Anchor, Button, InputAndButton, Input, Text, Checkbox, Label } from 'src/features/ui';
import { ReactComponent as ArrowSVG } from 'src/assets/icons/arrow-right.svg';
import { useState } from 'react';

function OpenInBrowser() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);

  return (
    <div data-cy="OpenInBrowser">
      {
        !isOpen ?
          <Button 
            colorScheme={1}
            fontSize={0}
            style={{ margin: '0 auto' }}
            onClick={() => setIsOpen(true)}
            dataCy="OpenInBrowserButtonToggle"
          >
            Open Discord in your browser
          </Button>
        :
          <>
            <InputAndButton
              input={
                <Input 
                  value={username}
                  setValue={setUsername}
                  placeholder="Enter a username"
                  dataCy="OpenInBrowserInputUsername"
                />
              }
              button={
                <Button 
                  colorScheme={2}
                  style={{ padding: '8px 16px' }}
                  dataCy="OpenInBrowserButtonConfirm"
                >
                  <ArrowSVG style={{ width: 24, height: 24 }}/>
                </Button>
              }
              style={{ margin: '0 auto' }}
            />

            <Label style={{ margin: '16px 0' }} dataCy="OpenInBrowserLabelAgree">
              <Checkbox
                isChecked={isAgreementChecked}
                setIsChecked={setIsAgreementChecked}
                dataCy="OpenInBrowserCheckboxAgree"
              />
              <Text style={{ fontSize: 14, userSelect: 'none' }}>
                I have read and agree to Discord's <Anchor href="/">Terms of Service</Anchor> and <Anchor href="/">Privacy Policy</Anchor>.
              </Text>
            </Label>
          </>
      }
    </div>
  );
}

export { OpenInBrowser };
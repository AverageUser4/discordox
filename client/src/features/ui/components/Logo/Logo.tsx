import { Anchor } from 'src/features/ui';
import { ReactComponent as LogoSVG } from 'src/assets/icons/logo-with-text.svg';

function Logo() {
  return (
    <Anchor href="/">
      <LogoSVG/>
    </Anchor>
  );
}

export { Logo };
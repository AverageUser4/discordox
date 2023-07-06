import { Anchor } from 'src/features/ui';
import { ReactComponent as LogoSVG } from 'src/assets/icons/logo-with-text.svg';

interface Props {
  className?: string,
}

function Logo({ className } : Props) {
  return (
    <Anchor 
      className={className}
      href="/"
    >
      <LogoSVG/>
    </Anchor>
  );
}

export { Logo };
import css from './Header.module.css';
import { Logo, Button } from 'src/features/ui';

function Header() {
  return (
    <header className={css['header']}>
      <div className={css['content']}>
        <Logo/>
        <Button colorScheme={0}>Login</Button>
      </div>
    </header>
  );
}

export { Header };
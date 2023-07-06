import css from './Header.module.css';
import { Logo, Anchor } from 'src/features/ui';

function Header() {
  return (
    <header className={css['header']}>
      <div className={css['content']}>
        <Logo/>
        <Anchor href="/login" look="button">Login</Anchor>
      </div>
    </header>
  );
}

export { Header };
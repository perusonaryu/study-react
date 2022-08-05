import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.anchor}>Index</a>
      </Link>

      <Link href="/about">
        <a className={styles.anchor}>About</a>
      </Link>
    </header>
  );
};

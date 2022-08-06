import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import Link from 'next/link';
import { useCallback } from 'react';

export default function Home() {
  const handleClick = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />
      <Link href="/about">
        <a onClick={handleClick}>ボタン</a>
      </Link>
      <Main page="index" />
      <Footer />
    </div>
  );
}
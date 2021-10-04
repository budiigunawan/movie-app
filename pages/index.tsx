import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href='https://nextjs.org'>Movie App!</a>
      </h1>
    </div>
  );
};

export default Home;

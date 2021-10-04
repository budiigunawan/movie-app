import React from 'react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Movie App!</a>
        </h1>
      </div>
    </main>
  );
};

export default Home;

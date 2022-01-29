import type { NextPage } from 'next';

import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>João Bispo | Portfólio</title>
        <meta name="description" content="Crafting software for the web" />
        <link
          rel="shortcut icon"
          href="/assets/icons/lightning.png"
          type="image/png"
        />
        {/* https://www.flaticon.com/premium-icon/lightning_2985698?term=lightning&related_id=2985698# */}
      </Head>

      <main className={styles.main}>
        <a
          className={styles.linkedin}
          href="https://linkedin.com/in/joaobispo2077"
          target="_blank"
          rel="noopener noreferrer"
        >
          @joaobispo2077
        </a>
      </main>
    </div>
  );
};

export default Home;

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Welcome to the Staff Wiki!"
      description="All information for HappySMP staff in one place.">
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Welcome to the Staff Wiki!!</h1>
          <p>
            This is the place where you can find <em>everything</em> you need to perform well as a staff member on the <strong>HappySMP Minecraft Server</strong>.
          </p>
          <p>
            Whether you're <strong>new</strong> or already have <strong>experience</strong>, this Wiki provides an overview of the <em>duties, responsibilities, and commands</em> for each staff rank.
            You'll also find a guide on how to resolve conflicts and give punishments properly.
          </p>

          <img
            src="https://i.ibb.co/qf3RgNY/image-2.png" // <- Replace with actual image path in /static/img/
            alt="Staff Image"
            className={styles.image}
          />

          <div className={styles.buttonWrapper}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"> {/* <- Update path to your actual doc start */}
              Go to Staff Documentation
            </Link>
          </div>

          <div className={styles.note}>
            <p>
              💡 Do you have suggestions or improvements for the Wiki? Contact <span className={styles.red}>Luke</span> or <span className={styles.red}>Sven</span>.
            </p>
            <p className={styles.warning}>
              👉 <strong>Click the button above or use the menu on the left to explore staff topics!</strong>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

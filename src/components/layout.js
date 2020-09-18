import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";

const name = "Suzukaze Yoru";
export const siteTitle = "Yami no Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <img
              className={classNames(styles.headerHomeImage, "rounded-full")}
              src="/images/profile.jpg"
              alt={name}
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  className={classNames(styles.headerImage, "rounded-full")}
                  src="/images/profile.jpg"
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilsStyles.headingLg}>
              <Link href="/">
                <a className="colorInherit">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Layout;

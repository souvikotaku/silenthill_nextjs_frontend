import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

import react, { useState, useEffect } from "react";
export default function Home() {
  // useEffect(() => {
  //   const monsterFetchUrl =
  //     "https://pure-island-40898.herokuapp.com/api/silenthill1-monsters";

  //   const fetchData = async () => {
  //     const response = await fetch(monsterFetchUrl);
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className={styles.mainBackgroundDiv}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        {/* bootstrap 5 */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link href="#">
            <a className="navbar-brand">Silent Hill</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Features</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Pricing</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="#">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link href="#">
                      <a className="dropdown-item">Action</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="dropdown-item">Another action</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="dropdown-item">Something else here</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Welcome to Silent Hill</h1> */}

        {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
        <div className={styles.mainCardDiv}>
          <div className={styles.innerCard}>
            <h5 className="card-header">Silent Hill 1</h5>
            <div className={styles.innerCardBody}>
              <h5 className="card-title" style={{ color: "transparent" }}>
                Special title treatment
              </h5>
              <p className="card-text" style={{ color: "transparent" }}>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link href="/games/silentHill1">
                <a className="btn btn-primary">Go</a>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

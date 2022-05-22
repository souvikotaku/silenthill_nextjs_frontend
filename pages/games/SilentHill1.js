import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import react, { useState, useEffect } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

const SilentHill1 = () => {
  const [monsterData, setMonsterData] = useState([]);
  useEffect(() => {
    const monsterFetchUrl =
      "https://pacific-journey-89141.herokuapp.com/api/silenthill1-monsters";

    const fetchData = async () => {
      const response = await fetch(monsterFetchUrl);
      const data = await response.json();
      console.log(data);
      setMonsterData(data.data);
    };
    fetchData();
  }, []);

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
          <a className="navbar-brand" href="#">
            Silent Hill 1
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row" style={{ paddingTop: "5%" }}>
        {monsterData.map((monster, index) => {
          const myLoader = ({ src }) => {
            return `${monster.attributes?.page_link}`;
          };
          return (
            <div
              key={index}
              className="card col-md-3 col-sm-12"
              style={{ width: "18rem", margin: "1em" }}
            >
              <div
                style={{
                  height: "15em",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="card-img-top"
              >
                <Image
                  // loader={myLoader}
                  src={monster.attributes?.image_link}
                  alt="..."
                  width={500}
                  height={400}
                  // layout="fill"
                />
              </div>

              <div className="card-body" style={{ height: "50%" }}>
                <h5 className="card-title">{monster.attributes?.name}</h5>
                <p className="card-text">{monster.attributes?.description}</p>
              </div>
              {/* <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul> */}
              <div className="card-body">
                <a
                  href={monster.attributes?.page_link}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  Read More
                </a>
                {/* <a href="#" className="card-link">
                Another link
              </a> */}
              </div>
            </div>
          );
        })}
      </div>

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
};

export default SilentHill1;

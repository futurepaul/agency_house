import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>agency.house</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </Head>

    <div className="column">
      <img src="./dot_house.svg" alt="agency.house"></img>
      <img src="./ah_logo.svg" alt="agency house logo"></img>
      <img src="./coming_july.svg" alt="coming july 2020"></img>
    </div>

    <div className="credit">
      PHOTO BY{" "}
      <a href="https://unsplash.com/@augustinewong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        AUGUSTINE WONG
      </a>
    </div>
    <style jsx>
      {`
        img {
          width: 95%;
        }
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .column {
          display: flex;
          flex-direction: column;
          padding: 2rem;
        }

        .credit {
          color: rgba(1, 1, 1, 0.75);
          font-size: 0.75rem;
          padding-bottom: 1rem;
        }

        a {
          color: rgba(1, 1, 1, 0.75);
        }
      `}
    </style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      html {
        background: url("./augustine-wong-shadow-dark.jpg") no-repeat center
          center fixed;
        background-size: cover;
        background-color: #efefef;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;

import Head from "next/head";

const Home = () => (
  <div className="container">
    <div className="column">
      <img src="./dot_house.svg" alt="agency.house"></img>
      <img src="./ah_logo.svg" alt="agency house logo"></img>
      <img src="./coming_july.svg" alt="coming july 2020"></img>
    </div>

    <div className="credit">
      Photo by{" "}
      <a href="https://unsplash.com/@augustinewong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Augustine Wong
      </a>
    </div>
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .column {
          display: flex;
          flex-direction: column;
          padding: 2rem;
        }

        .credit {
          color: rgba(1, 1, 1, 0.2);
          font-size: 0.75rem;
          padding-bottom: 1rem;
        }

        a {
          color: rgba(1, 1, 1, 0.2);
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

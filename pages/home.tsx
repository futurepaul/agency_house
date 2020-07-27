import theme from "../theme";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <main>
      <h2>
        Agency House is a platform built to equip creatives to bring their
        passion projects to life.
      </h2>
    </main>
    <style jsx>
      {`
        main {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 2rem;
          min-height: calc(100vh - 133px);
          width: 100vw;
          background-image: url("./tumbleweed.jpg");
          background-blend-mode: darken;
          background-color: ${theme.light};
          background-position: 50vw;
          background-size: auto 100%;
          background-repeat: no-repeat;
        }
        h2 {
          font-size: 3rem;
          font-weight: normal;
          text-transform: uppercase;
          width: 60vw;
        }
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
  </Layout>
);

export default Home;

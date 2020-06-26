import Layout from "../../components/Layout";
import theme from "../../theme";
import { motion } from "framer-motion";

const CreativeCard = () => {
  return (
    <motion.div
      animate={{
        translateX: [0, "25vw", 0, "-25vw", 0],
      }}
      transition={{
        duration: 5,
        loop: Infinity,
      }}
    >
      <img src="../matt.png" />
      <h2>
        Matt
        <br />
        Delbridge
      </h2>
      <style jsx>
        {`
          h2 {
            margin: 0;
            font-size: 2rem;
            font-weight: normal;
            text-transform: uppercase;
          }
        `}
      </style>
    </motion.div>
  );
};

const Creatives = () => (
  <Layout>
    <main>
      <div className="row">
        <CreativeCard />
      </div>
      <div>
        <ul>
          <li>
            <strong>Freelance or Full-time</strong>
            <span>Full-time</span>
          </li>
          <li>
            <strong>Based in</strong> Los Angeles
          </li>
          <li>
            <strong>Field</strong> Graphic Design{" "}
          </li>
          <li>
            <strong>Interests</strong> #AppDesign, #projection,
            #documentaryfilms
          </li>
          <li>
            <strong>Favorite Project</strong> Designing Hall of magic
          </li>
          <li>
            <strong>Goal Brand</strong> Capri Sun
          </li>
          <li>
            <strong>Passion Project</strong> I want to project films in sync
            outdoors across the country.{" "}
          </li>
        </ul>
      </div>
    </main>
    <style jsx>
      {`
        ul {
          padding-top: 2rem;
          list-style: none;
        }
        li {
          padding: 0.5rem;
          border-top: 1px solid ${theme.dark2};
          margin-top: 2rem;
          font-weight: bold;
        }
        strong {
          position: absolute;
          margin-top: -1.95rem;
          font-family: "T-Star";
          text-transform: uppercase;
          padding: 0.5rem;
          font-size: 1.25rem;
          font-weight: normal;
        }

        u {
          padding: 0.5rem;
          background-color: white;
          border: 1px solid ${theme.dark2};
          text-decoration: none;
        }
        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          min-height: calc(100vh - 133px);
          width: 100vw;
        }
        h2 {
          font-size: 3rem;
          font-weight: normal;
          text-transform: uppercase;
          width: 60vw;
        }
      `}
    </style>
  </Layout>
);

export default Creatives;

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

const Stat = ({ question, answer }) => {
  return (
    <div>
      <h3>{question}</h3>
      <p>{answer}</p>
      <style jsx>{`
        div {
          border-top: 1px solid ${theme.dark2};
          max-width: 20rem;
        }
        h3 {
          position: absolute;
          margin-top: -1.45rem;
          font-family: "T-Star";
          text-transform: uppercase;
          padding: 0.5rem;
          font-size: 1.25rem;
          font-weight: normal;
        }
        p {
          margin: 0;
          margin-top: 0.5rem;
          text-align: right;
        }
      `}</style>
    </div>
  );
};

const qa = [
  { q: "Freelance or Full-time", a: "Full-time" },
  { q: "Based in", a: "Los Angeles" },
  { q: "Field", a: "Graphic Design" },
  { q: "Interest", a: "#AppDesign, #projection, #documentaryfilms" },
  { q: "Favorite Project", a: "Designing Hall of Magic" },
  { q: "Goal Brand", a: "Capri Sun" },
  {
    q: "Passion Project",
    a: "I want to project films in sync outdoors across the country.",
  },
];

const Creatives = () => (
  <Layout>
    <main>
      <div className="row">
        <CreativeCard />
      </div>
      <div>
        <ul>
          {qa.map((qa) => (
            <li>
              <Stat question={qa.q} answer={qa.a} />
            </li>
          ))}
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
          margin-top: 2rem;
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
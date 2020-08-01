import Layout from "../../components/Layout";
import theme from "../../theme";
import { motion } from "framer-motion";
import fs from "fs";
import slugify from "../../util";
import { CreativeCard } from ".";

const AnimatedCard = ({ person }) => {
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
      <CreativeCard person={person} ownPage />
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

const SingleTalent = ({ person }) => {
  return (
    <Layout>
      <main>
        <div className="row">
          <AnimatedCard person={person} />
        </div>
        <div>
          <ul>
            <li>
              <Stat question={"Based in"} answer={person.basedIn} />
            </li>
            <li>
              <Stat
                question={"Field / Industry"}
                answer={person.fieldIndustry}
              />
            </li>
            <li>
              <Stat question={"Experience"} answer={person.experience} />
            </li>

            <li>
              <Stat
                question={"Full-time or freelancer"}
                answer={person.fulltimeOrFreelancer}
              />
            </li>
            <li>
              <Stat
                question={"Tier: Day / hourly rate"}
                answer={person.dayRateHourlyRate}
              />
            </li>
            <li>
              <Stat
                question={"Available to hire for:"}
                answer={person.availableToHire}
              />
            </li>
            <li>
              <Stat question={"Interests"} answer={person.interests} />
            </li>
            <li>
              <Stat
                question={"Favorite project you've worked on"}
                answer={person.mostProudProject}
              />
            </li>
            <li>
              <Stat
                question={"Passion Project"}
                answer={person.passionProject}
              />
            </li>
            <li>
              <Stat question={"Superpower"} answer={person.superpower} />
            </li>
          </ul>
        </div>
      </main>
      <style jsx>
        {`
          ul {
            padding-top: 2rem;
            list-style: none;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 35rem;
          }
          li {
            padding: 1rem;
            margin-top: 2rem;
            width: 15rem;
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
};

export const getStaticPaths = async () => {
  const talent = JSON.parse(fs.readFileSync("talent.json").toString());
  console.log(talent);
  const paths = talent.map((person) => ({
    params: {
      slug: slugify(person.name),
    },
  }));

  console.log(paths);

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const talent = JSON.parse(fs.readFileSync("talent.json").toString());
  let personProp = null;
  for (const person of talent) {
    if (slugify(person.name) === slug) {
      personProp = person;
    }
  }

  return {
    props: {
      person: personProp,
    },
  };
};

export default SingleTalent;

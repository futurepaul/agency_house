import theme from "../theme";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { CreativeCard } from "./talent";
import { motion } from "framer-motion";
import StrikeThroughHeader from "../components/StrikeThroughHeader";

function copyArray(source, array) {
  var index = -1,
    length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

const loop = (steps: any[]) => {
  let newArray = [];
  copyArray(steps, newArray);
  let last = newArray.pop();
  newArray.unshift(last);
  return newArray;
};

const initialSteps = [
  {
    id: "1",
    image: "1_off_horse.jpg",
    caption: "1. Creator wants to make a passion project",
  },
  {
    id: "2",
    image: "2_lasso.jpg",
    caption:
      "2. Creator partners with Agency House to develop & fund the project",
  },
  {
    id: "3",
    image: "3_cattle_drive.jpg",
    caption:
      "3. Creator builds a team with Agency House members and uses their tokens",
  },
  {
    id: "4",
    image: "4_cattle_drive.jpg",
    caption:
      "4. Those members now have more tokens to make their own projects!",
  },
];
const StepCard = ({ data }) => {
  return (
    <section>
      <div className="img-wrap">
        <img src={data.image} />
      </div>
      <h2>{data.caption}</h2>
      <style jsx>
        {`
          .img-wrap {
            width: 20vw;
            height: 20vw;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          img {
            max-width: 20vw;
            max-height: 20vw;
          }
          h2 {
            padding-top: 1rem;
            width: 20vw;
          }
        `}
      </style>
    </section>
  );
};

const DreamWork = () => (
  <section>
    <div className="accent-wrapper">
      <img src="./ceiling.jpg" />
      <h2>
        Dream
        <br />
        Work
        <br />
        Team
        <br />
        Work
      </h2>
    </div>
    <style jsx>{`
      section {
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .accent-wrapper {
        display: flex;
        flex-direction: row;
        width: 90vw;
        background-color: ${theme.tan2};
        color: ${theme.light};
      }

      .accent-wrapper h2 {
        flex: 0;
        border: 2px solid ${theme.dark1};
        margin: 2rem;
        padding: 2rem 2rem 2rem 4rem;
        text-align: right;
      }
      .accent-wrapper img {
        margin-top: -2rem;
        margin-bottom: -2rem;
        margin-left: 2rem;
      }

      img {
        flex: 1;
        max-width: 50vw;
        object-fit: cover;
      }
      h2 {
        font-size: 2.5rem;
        font-weight: normal;
        text-transform: uppercase;
        flex: 1;
      }
    `}</style>
  </section>
);

const WhyHow = () => (
  <section className="with-header">
    <StrikeThroughHeader offset={2.7}>
      <div className="row center">
        <h1>Why</h1>
        <div className="spacer" />
        <div className="spacer" />
        <h1>How</h1>
      </div>
    </StrikeThroughHeader>
    <div className="row content">
      <p>
        In the film and television world “the talent” refers to the actors. Here
        at agency we’re interested in “talent” both above the line and below the
        line. From PAs, craft services, transpo, drivers – to UPMs, EPs, script
        supervisors etc – we’re interested. Because to make these passion
        projects we need it all.
      </p>
      <div className="spacer" />
      <div className="spacer" />
      <p>
        Around here we operate on a token basis for paying people to work on our
        passion projects. Gone are the days of calling in all the favors and
        always feeling compelled to work on every passion project one of your
        buddies does just to build capital. Cue the token system. We keep track
        of your “credit” and also give a currency framework to alleviate any
        weirdness when you’re not paying someone to work for you.
      </p>
    </div>
    <style jsx>
      {`
        h1 {
          font-size: 5rem;
          color: ${theme.light};
          text-shadow: 3px -3px 0px ${theme.dark2};
        }
        .spacer {
          width: 2rem;
        }
        section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .content {
          padding: 0 4rem;
          font-size: 1.25rem;
        }
        .row p {
          width: 35vw;
        }
      `}
    </style>
  </section>
);

const TheCycle = () => (
  <section id="cycle" className="inverted column">
    <h1>The Cycle</h1>

    <div className="row">
      <div className="column center content">
        <p>
          There are three tiers of talent rates based on your average day rate.
          <br />
          Tier 1: $500/day
          <br />
          Tier 2: $500-$1000/day
          <br />
          Tier 3: $1000+/day.
        </p>
        <p>
          When you sign your 1-year membership with Agency House you commit five
          days of your time to work on other’s projects. You also receive five
          tokens to employ others on your projects. Refer to FAQ for more
          details.
        </p>
        <p>
          Agency House will be just as involved in your projects as you want.
        </p>
      </div>
      <div className="spacer" />
      <div className="row center">
        <img src="./moon.jpg" />
      </div>
    </div>
    <div></div>
    <style jsx>{`
      h1 {
        font-size: 5rem;
        color: ${theme.light};
        text-shadow: 3px -3px 0px ${theme.dark2};
      }
      .content {
        padding: 0 4rem;
        font-size: 1.25rem;
        flex: 1;
        align-items: start;
      }
      .inverted {
        color: ${theme.light};
        background-color: black;
      }
      .inverted h1 {
        margin-top: -3.5rem;
        align-self: center;
      }
      img {
        flex: 1;
        max-width: 50vw;
        object-fit: center;
      }
      section {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </section>
);
const TheSystem = () => {
  const [steps, setSteps] = useState(initialSteps);

  useEffect(() => {
    setTimeout(() => setSteps(loop(steps)), 2000);
  }, [steps]);

  return (
    <section id="tokens">
      <StrikeThroughHeader offset={2.7}>
        <h1>The System</h1>
      </StrikeThroughHeader>
      <div className="row width-100">
        {steps.map((step, index) => (
          <motion.div positionTransition key={step.id}>
            <StepCard data={step} />
          </motion.div>
        ))}
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 5rem;
            color: ${theme.light};
            text-shadow: 3px -3px 0px ${theme.dark2};
          }
          section {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
          .row {
            justify-content: space-around;
          }
          .width-100 {
            width: 100vw;
          }
        `}
      </style>
    </section>
  );
};

const Guidelines = () => (
  <section id="code">
    <div className="accent-wrapper sequel">
      <img src="./adrien-converse.jpg" />
      <div className="column content">
        <p>There are some guidelines for everyone’s protection.</p>

        <ul>
          <li>Around here we build our days based on a ten hour work day</li>
          <li>
            If you’re doing a twelve hour day we require a heads up so we can
            discuss additional compensation with Agency House talent.
          </li>
          <li>
            If it’s more than a 1-hour subway trip for your talent to get to
            set/site we require you to cover a car for transportation.
          </li>
          <li>“Lunch” must be provided.</li>
        </ul>
        <p>
          After each project we’ll conduct a brief 15min tear-down both with the
          talent paid by token and the talent leading the project to help us
          continue improving this system.
        </p>
      </div>
    </div>
    <style jsx>{`
      img {
        flex: 1;
        max-width: 50vw;
        object-fit: cover;
      }
      .content {
        padding: 4rem;
        color: black;
        font-size: 1.25rem;
      }
      .column {
        flex: 1;
      }

      li {
        list-style-type: "+";
      }
      .accent-wrapper {
        display: flex;
        flex-direction: row;
        width: 90vw;
        background-color: ${theme.tan2};
        color: ${theme.light};
      }

      .accent-wrapper h2 {
        flex: 0;
        border: 1px solid ${theme.dark1};
        margin: 2rem;
        padding: 2rem 2rem 2rem 4rem;
        text-align: right;
      }

      .accent-wrapper img {
        margin-top: -2rem;
        margin-bottom: -2rem;
        margin-left: 2rem;
      }

      .accent-wrapper.sequel {
        background-color: ${theme.tan3};
        width: 100vw;
      }
      section {
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    `}</style>
  </section>
);
const Projects = () => {
  return (
    <Layout>
      <main>
        <DreamWork />
        <WhyHow />
        <TheCycle />
        <TheSystem />
        <Guidelines />
      </main>
      <style jsx>
        {`
          main {
            display: flex;
            flex-direction: column;
            min-height: calc(100vh - 133px);
            width: 100vw;
          }
        `}
      </style>
    </Layout>
  );
};
export default Projects;

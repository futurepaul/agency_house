import theme from "../theme";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { CreativeCard } from "./talent";
import { motion } from "framer-motion";

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

const initialSteps = ["1", "2", "3", "4"];

const Projects = () => {
  const [steps, setSteps] = useState(initialSteps);

  useEffect(() => {
    setTimeout(() => setSteps(loop(steps)), 2000);
  }, [steps]);

  return (
    <Layout>
      <main>
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
        </section>
        <section className="with-header">
          <div className="line-through-header">
            <h1>Why</h1>
            <div className="spacer" />
            <div className="spacer" />
            <h1>How</h1>
            <div className="strikethrough"></div>
          </div>
          <div className="row content">
            <p>
              IN THE film and television world “the talent” refers to the
              actors. Here at agency we’re interested in “talent” both above the
              line and below the line. From PAs, craft services, transpo,
              drivers – to UPMs, EPs, script supervisors etc – we’re interested.
              Because to make these passion projects we need it all.
            </p>
            <div className="spacer" />
            <div className="spacer" />
            <p>
              Around here we operate on a token basis for paying people to work
              on our passion projects. Gone are the days of calling in all the
              favors and always feeling compelled to work on every passion
              project one of your buddies does just to build capital. Cue the
              token system. We keep track of your “credit” and also give a
              currency framework to alleviate any weirdness when you’re not
              paying someone to work for you.
            </p>
          </div>
        </section>
        <section id="the_cycle" className="inverted column">
          <h1>The Cycle</h1>

          <div className="row">
            <div className="content">
              <p>
                There are three tiers of talent rates based on your average day
                rate.
                <br />
                Tier 1: $500/day
                <br />
                Tier 2: $500-$1000/day
                <br />
                Tier 3: $1000+/day.
              </p>
              <p>
                When you sign your 1-year membership with Agency House you
                commit five days of your time to work on other’s projects. You
                also receive five tokens to employ others on your projects.
                Refer to FAQ for more details.
              </p>
              <p>
                Agency House will be just as involved in your projects as you
                want. You can hire Agency to be your production company, build
                out the rest of your team, etc. You can do it all on your own
                just using your talent from Agency House.
              </p>
            </div>
            <div className="spacer" />
            <img src="./moon.jpg" />
          </div>
        </section>
        <section id="the_system" className="with-header">
          <div className="line-through-header">
            <h1>The System</h1>
            <div className="strikethrough"></div>
          </div>
          <div className="row content">
            {steps.map((step) => (
              <motion.div positionTransition key={step}>
                <CreativeCard first={"step"} last={step} />
              </motion.div>
            ))}
          </div>
        </section>
        <section id="guidelines">
          <div className="accent-wrapper sequel">
            <img src="./adrien-converse.jpg" />
            <div className="column content">
              <p>There are some guidelines for everyone’s protection.</p>

              <ul>
                <li>
                  Around here we build our days based on a ten hour work day
                </li>
                <li>
                  If you’re doing a twelve hour day we require a heads up so we
                  can discuss additional compensation with Agency House talent.
                </li>
                <li>
                  If it’s more than a 1-hour subway trip for your talent to get
                  to set/site we require you to cover a car for transportation.
                </li>
                <li>“Lunch” must be provided.</li>
              </ul>
              <p>
                After each project we’ll conduct a brief 15min tear-down both
                with the talent paid by token and the talent leading the project
                to help us continue improving this system.
              </p>
            </div>
          </div>
        </section>
      </main>
      <style jsx>
        {`
          #guidelines .content {
            padding: 4rem;
            color: black;
          }
          li {
            list-style-type: "+";
          }
          section.with-header {
            flex: 1;
            flex-direction: column;
            justify-content: center;
          }
          .line-through-header {
            flex: 1;
            width: 100vw;
            display: flex;
            flex-direction: row;
            align-self: start;
            align-items: center;
            justify-content: center;
          }
          .strikethrough {
            position: absolute;
            height: 2px;
            width: 100vw;
            background-color: black;
          }

          h1 {
            font-size: 5rem;
            color: ${theme.light};
            text-shadow: 3px -3px 0px ${theme.dark2};
          }

          .inverted h1 {
            margin-top: -3.5rem;
          }

          .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 4rem;
            font-size: 1.25rem;
            flex: 1;
          }

          .row p {
            width: 35vw;
          }

          .row {
            flex: 1;
            display: flex;
            flex-direction: row;
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

          main {
            display: flex;
            flex-direction: column;
            min-height: calc(100vh - 133px);
            width: 100vw;
          }
          .spacer {
            flex-basis: 2rem;
          }

          .inverted {
            color: ${theme.light};
            background-color: black;
          }
          h2 {
            font-size: 2.5rem;
            font-weight: normal;
            text-transform: uppercase;
            flex: 1;
          }
          img {
            flex: 1;
            max-width: 50vw;
            object-fit: cover;
          }
          .container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }

          .column {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </Layout>
  );
};
export default Projects;

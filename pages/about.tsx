import theme from "../theme";
import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <main>
      <section>
        <div className="spacer" />
        <h2>
          After working in art departments for film and television production
          for years I transitioned into live events and eventually went in-house
          as a senior producer at an experiential marketing agency. Having seen
          both sides of the freelance/full-time fence I’ve been ideating on how
          to build a better system.
        </h2>
        <div className="spacer" />
        <img src="./about_collage_1.jpg" />
      </section>
      <section className="inverted">
        <img src="./planet.jpg" />
        <div className="spacer" />
        <h2>
          After listening to the ways in which the system could be improved I
          set off to make a space to champion individuals and make thoughtful
          connections with brands/clients/projects.
        </h2>
        <div className="spacer" />
      </section>
      <section>
        <div className="spacer" />
        <h2>
          The other part of Agency house is partnering with creatives to bring
          passion projects to life. Pretty much every creative you’ll meet has a
          passion project they’d like to do one day. For a variety of reasons
          there are a lot of amazing ideas that are stuck in creative purgatory.
          We’re here to change that.
        </h2>
        <div className="spacer" />
        <img src="./a_bunch_of_cowboys.jpg" />
        <div className="spacer" />
      </section>
      <section>
        <h2>
          So that’s agency house. Somewhere to bring a project to be brought to
          life, find a freelancer, or work with creatives on some next-level
          passion projects.
        </h2>
      </section>
    </main>
    <style jsx>
      {`
        main {
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 133px);
          width: 100vw;
        }
        .spacer {
          flex-basis: 2rem;
        }
        section {
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        section:last-of-type {
          justify-content: center;
          padding-left: 25vw;
          padding-right: 25vw;
          background-image: url("./palm.png");
          background-blend-mode: darken;
          background-color: ${theme.light};
          background-size: auto 100%;
          background-repeat: no-repeat;
        }

        .inverted {
          color: ${theme.light};
          background-color: ${theme.dark1};
        }
        h2 {
          font-size: 2.5rem;
          font-weight: normal;
          text-transform: uppercase;
          flex: 1;
        }
        img {
          flex: 1;
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

export default About;

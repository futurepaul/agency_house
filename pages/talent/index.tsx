import Layout from "../../components/Layout";
import Link from "next/link";
import StrikeThroughHeader from "../../components/StrikeThroughHeader";
import theme from "../../theme";
import talent from "../../talent.json";

export const CreativeCard = ({ first, last }) => {
  console.log(talent);
  return (
    <Link href="/talent/matt-delbridge">
      <section>
        <img src="./matt.png" />
        <h2>
          {first}
          <br />
          {last}
        </h2>
        <style jsx>
          {`
            h2 {
              margin: 0;
              font-size: 2rem;
              font-weight: normal;
              text-transform: uppercase;
            }

            section:hover {
              cursor: url("/lasso.png"), auto;
            }
          `}
        </style>
      </section>
    </Link>
  );
};

const Talent = () => (
  <Layout>
    <main>
      <section id="top">
        <div className="flex"></div>
        <h1>
          Time is our currency and people are
          <br /> gold
        </h1>
      </section>
      <section className="with-header">
        <StrikeThroughHeader>
          <h2>Agency Is A Place For</h2>
        </StrikeThroughHeader>
        <div className="row content uppercase">
          <p>
            +folks with full-time gigs
            <br />
            +confirmed freelancers
            <br />
            +folks in unions
            <br />
            +folks not in unions
            <br />
            +folks with a passion project of their own
            <br />
          </p>
          <div className="spacer" />
          <div className="spacer" />
          <p>
            +folks who want to work on other folks’s passion projects
            <br />
            +folks established in one field/path but want to build experience in
            a new <br />
            +creatives
            <br />
            +folks that wouldn’t consider themselves creatives
          </p>
        </div>
      </section>
      <section id="ready">
        <div className="row">
          <div className="blaze-wrap">
            <h2>Ready to blaze a trail?</h2>
          </div>
          <img src="./a_bunch_of_cowboys.jpg" />
        </div>
      </section>
      <section id="talent" className="with-header">
        <StrikeThroughHeader>
          <h1>The Talent</h1>
        </StrikeThroughHeader>
        <div className="row">
          <CreativeCard first={"Matt"} last={"Delbridge"} />
          <CreativeCard first={"Matt"} last={"Delbridge"} />
          <CreativeCard first={"Matt"} last={"Delbridge"} />
          <CreativeCard first={"Matt"} last={"Delbridge"} />
        </div>
      </section>
    </main>
    <style jsx>
      {`
        #top {
          background-image: url("./talent_header.jpg");
          background-blend-mode: darken;
          background-color: ${theme.light};
          background-position: bottom left;
          background-size: auto 75%;
          background-repeat: no-repeat;
        }

        #ready {
          background-image: url("./shell_texture.jpg");
          background-blend-mode: darken;
          background-color: ${theme.light};
          background-position: center;
          background-size: 100% 50%;
          background-repeat: no-repeat;
        }

        #ready h2 {
          color: white;
          background-color: ${theme.dark1};
          width: 30vw;
          padding: 5rem;
        }

        .blaze-wrap {
          margin-bottom: -10rem;
          border: 2px solid ${theme.tan3};
          padding: 1rem;
        }

        #ready img {
          border: 10px solid ${theme.dark2};
          max-width: 50vw;
          object-fit: cover;
          margin-top: -10rem;
        }

        .flex {
          flex: 1;
        }
        #top h1 {
          text-align: right;
          flex: 2;
          padding-top: 2rem;
          padding-bottom: 2rem;
          color: ${theme.tan3};
          text-shadow: -3px -3px 0px white;
          border-top: 2px solid ${theme.dark2};
          border-bottom: 2px solid ${theme.dark2};
          margin-right: 2rem;
        }

        section {
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        section.with-header {
          flex: 1;
          flex-direction: column;
          justify-content: center;
        }
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 4rem;
          font-size: 1.25rem;
          flex: 1;
        }
        .row {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
        }

        .uppercase {
          text-transform: uppercase;
        }

        .row p {
          width: 35vw;
        }

        .spacer {
          flex-basis: 2rem;
        }
        main {
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 133px);
          width: 100vw;
        }
        h2 {
          font-size: 3rem;
          font-weight: normal;
          text-transform: uppercase;
          width: 60vw;
        }
        h1 {
          font-size: 5rem;
          color: ${theme.light};
          text-shadow: 3px -3px 0px ${theme.dark2};
        }
      `}
    </style>
  </Layout>
);

export default Talent;

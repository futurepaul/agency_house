import Layout from "../../components/Layout";
import Link from "next/link";
import StrikeThroughHeader from "../../components/StrikeThroughHeader";
import theme from "../../theme";

export const CreativeCard = ({ first, last }) => {
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
        .row {
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
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

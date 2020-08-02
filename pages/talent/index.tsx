import Layout from "../../components/Layout";
import Link from "next/link";
import StrikeThroughHeader from "../../components/StrikeThroughHeader";
import theme from "../../theme";
import fs from "fs";
import slugify from "../../util";

export const CreativeCard = ({ person, ownPage = false }) => {
  const [first, last] = person.name.split(" ");
  const slug = slugify(person.name);

  return (
    <Link href={`/talent/[pid]`} as={`/talent/${slug}`}>
      <section>
        <img src={`/talent_photos/${slug}.jpg`} />
        <h2>
          {first}
          <br />
          {last}
        </h2>
        <style jsx>
          {`
            section:hover {
              cursor: url("/lasso.png"), auto;
            }
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

            @media all and (max-width: 480px) {
              h2 {
                padding-top: 1rem;
                width: 80vw;
              }
              .img-wrap {
                width: 80vw;
                height: 80vw;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              img {
                max-width: 80vw;
                max-height: 80vw;
              }
              section {
                margin-bottom: 2rem;
                margin-top: 2rem;
              }
            }
          `}
        </style>
      </section>
    </Link>
  );
};

const PeopleAreGold = () => (
  <section>
    <div className="flex"></div>
    <h1>
      Time is our currency and people are
      <br /> gold
    </h1>
    <style jsx>{`
      section {
        background-image: url("./talent_header.jpg");
        background-blend-mode: darken;
        background-color: ${theme.light};
        background-position: bottom left;
        background-size: auto 75%;
        background-repeat: no-repeat;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      h1 {
        text-align: right;
        flex: 2;
        font-size: 5rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        color: ${theme.tan3};
        text-shadow: -3px -3px 0px white;
        border-top: 2px solid ${theme.dark2};
        border-bottom: 2px solid ${theme.dark2};
        margin-right: 2rem;
      }

      .flex {
        flex: 1;
      }
    `}</style>
  </section>
);

const PlaceFor = () => (
  <section id="whofor">
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
      <p>
        +folks who want to work on other folks’s passion projects
        <br />
        +folks established in one field/path but want to build experience in a
        new <br />
        +creatives
        <br />
        +folks that wouldn’t consider themselves creatives
      </p>
    </div>
    <style jsx>{`
      section {
        font-size: 1.5rem;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .content {
        padding: 0 4rem;
      }
      .row {
        align-items: start;
        justify-content: space-around;
      }
      .row p {
        width: 35vw;
      }
      .uppercase {
        text-transform: uppercase;
      }

      @media all and (max-width: 480px) {
        .content {
          padding: 0 2rem;
        }
        .row p {
          width: 80vw;
          margin-bottom: 0;
          margin-top: 0;
        }

        .row p:nth-child(1) {
          margin-top: 2rem;
        }
      }
    `}</style>
  </section>
);

const Ready = () => (
  <section id="ready">
    <div className="row">
      <div className="blaze-wrap">
        <h2>Ready to blaze a trail?</h2>
      </div>
      <img src="./a_bunch_of_cowboys.jpg" />
    </div>
    <style jsx>{`
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
        font-size: 3rem;
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

      section {
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .row {
        flex: 1;
        align-items: center;
        justify-content: space-around;
      }

      @media all and (max-width: 480px) {
        .blaze-wrap {
          margin-bottom: 0rem;
          border: 2px solid ${theme.tan3};
          padding: 1rem;
        }
        #ready h2 {
          width: 70vw;
        }
        #ready img {
          border: 10px solid ${theme.dark2};
          max-width: 90vw;
          object-fit: cover;
          margin-top: 2rem;
        }
        #ready {
          margin-bottom: 4rem;
        }
      }
    `}</style>
  </section>
);

const TalentList = ({ talent }) => (
  <section id="members">
    <StrikeThroughHeader>
      <h1>The Talent</h1>
    </StrikeThroughHeader>
    <div className="row center">
      {talent.map((person) => (
        <CreativeCard person={person} />
      ))}
    </div>
    <style jsx>{`
      h1 {
        font-size: 3rem;
      }
      section {
        font-size: 1.5rem;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      }
    `}</style>
  </section>
);

const Interested = () => (
  <section id="join">
    <StrikeThroughHeader>
      <h1>
        Interested in joining? <br />
        Have any questions? <br />
        <a href="mailto:alm@agency.house">Drop us a line</a>. We'll be in touch.
      </h1>
    </StrikeThroughHeader>
    <style jsx>{`
      a {
        color: ${theme.tan3};
      }
      h1 {
        width: 50vw;
      }
      section {
        text-align: right;
        font-size: 1.5rem;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </section>
);

const Talent = ({ talent }) => (
  <Layout>
    <main>
      <PeopleAreGold />
      <PlaceFor />
      <Ready />
      <TalentList talent={talent} />
      <Interested />
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

export const getStaticProps = async () => {
  const talent = JSON.parse(fs.readFileSync("talent.json").toString());
  console.log(talent);

  return {
    props: {
      talent,
    },
  };
};

export default Talent;

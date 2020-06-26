import Layout from "../../components/Layout";
import Link from "next/link";

const CreativeCard = () => {
  return (
    <Link href="/creatives/matt-delbridge">
      <section>
        <img src="./matt.png" />
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
      </section>
    </Link>
  );
};

const Creatives = () => (
  <Layout>
    <main>
      <div className="row">
        <CreativeCard />
        <CreativeCard />
        <CreativeCard />
        <CreativeCard />
      </div>
    </main>
    <style jsx>
      {`
        .row {
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        main {
          display: flex;
          flex-direction: row;
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

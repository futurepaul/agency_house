import theme from "../theme";
import Layout from "../components/Layout";

const Consult = () => (
  <Layout>
    <main>
      <section>
        <div className="row content">
          <div className="left">
            <h2>
              WE’RE NOT QUITE READY TO LAUNCH THIS SPACESHIP.
              <br />
              <br />
              FOLLOW ALONG ON OUR SOCIAL FOR UPDATES!
            </h2>
          </div>

          <div className="invert">
            <img src="which_planet.jpg" />
          </div>
        </div>
      </section>
    </main>
    <style jsx>{`
      .left {
        background-color: ${theme.tan3};
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .invert {
        background-color: #171819;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h2 {
        font-size: 3rem;
        color: ${theme.light};
        text-shadow: 3px 3px 0px ${theme.dark2};
      }
      .content {
        font-size: 1.25rem;
        flex: 1;
      }
      .inverted {
        color: ${theme.light};
        background-color: black;

        flex: 1;
        max-width: 50vw;
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
  </Layout>
);

export default Consult;

import theme from "../theme";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="left">
        <section>
          <h2>Pony Express</h2>
          <h2>
            <a href="mailto:alm@agency.house">alm@agency.house</a>
          </h2>
          <div className="spacer" />
          <h2>Telegraph</h2>
          <h2>509 551 1910</h2>
          <div className="spacer" />
          <h2>Social</h2>
          <div className="row social">
            <a href="https://twitter.com/Agency__House">
              <img src="/twitter.svg"></img>
            </a>
            <div className="spacer" />
            <a href="https://www.instagram.com/agency.house/">
              <img src="/insta.svg"></img>
            </a>
          </div>
        </section>
      </div>
      <div className="flex"></div>

      <div className="column">
        <div className="right row">
          <section>
            <h2>Talent</h2>
            <p>
              <Link href="/talent#whofor">
                <a>Who it's for</a>
              </Link>
            </p>
            <p>
              <Link href="/talent#members">
                <a>Members</a>
              </Link>
            </p>
            <p>
              <Link href="/talent#join">
                <a>Want to join?</a>
              </Link>
            </p>
          </section>
          <section>
            <h2>Projects</h2>
            <p>
              <Link href="/projects#cycle">
                <a>How it works</a>
              </Link>
            </p>
            <p>
              <Link href="/projects#tokens">
                <a>"Tokens?"</a>
              </Link>
            </p>
            <p>
              <Link href="/projects#code">
                <a>Code of the west</a>
              </Link>
            </p>
          </section>
          <section>
            <h2>About</h2>
            <p>
              <Link href="/about#story">
                <a>Story</a>
              </Link>
            </p>
            <p>
              <Link href="/about#mission">
                <a>Mission</a>
              </Link>
            </p>
          </section>
        </div>
        <div className="ack">
          <section>
            <h2>
              <Link href="/acknowledgements">
                <a>Acknowledgements</a>
              </Link>
            </h2>
          </section>
        </div>
      </div>
      <style jsx>{`
        .spacer {
          height: 2rem;
          width: 1rem;
        }
        .right {
          text-align: right;
          flex-wrap: wrap;
        }
        h2 {
          text-transform: uppercase;
          font-weight: normal;
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        a {
          text-transform: uppercase;
          color: ${theme.light};
          margin-bottom: 0.5rem;
        }

        p {
          margin-bottom: 0.5rem;
          font-family: "T-Star";
        }

        footer {
          width: 100vw;
          display: flex;
          flex-direction: row;
          color: ${theme.light};
          background-color: ${theme.dark2};
          padding: 2rem;
        }

        section {
          flex: 1;
          margin-right: 2rem;
          margin-bottom: 2rem;
          min-width: 7rem;
        }
        .column {
          align-items: end;
        }

        .flex {
          flex: 1;
        }

        .social {
          flex-direction: row;
        }

        @media all and (max-width: 480px) {
          .left {
            width: 50vw;
          }
          .right {
            width: 50vw;
          }
          footer {
            padding: 1rem;
          }

          section {
            min-width: 6rem;
            flex: none;
          }

          .ack {
            margin-left: -3rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

import theme from "../theme";

const Footer = () => {
  return (
    <footer>
      <section>
        <h2>Pony Express</h2>
        <p>
          <a href="alm@agency.house">alm@agency.house</a>
        </p>
      </section>
      <section>
        <h2>Phone</h2>
        <p>509 551 1910</p>
      </section>
      <section>
        <h2>Address</h2>
        <p>16 Diamond Street</p>
        <p>Brooklyn, NY 11222</p>
      </section>
      <section>
        <h2>Creatives</h2>
        <p>
          <a href="#">Link 1</a>
        </p>
        <p>
          <a href="#">Link 2</a>
        </p>
      </section>
      <section>
        <h2>Brands</h2>
        <p>
          <a href="#">Link 1</a>
        </p>
        <p>
          <a href="#">Link 2</a>
        </p>
      </section>
      <section>
        <h2>Projects</h2>
        <p>
          <a href="#">Link 1</a>
        </p>
        <p>
          <a href="#">Link 2</a>
        </p>
      </section>
      <section>
        <h2>About</h2>
        <p>
          <a href="#">Link 1</a>
        </p>
        <p>
          <a href="#">Link 2</a>
        </p>
      </section>
      <style jsx>{`
        h2 {
          text-transform: uppercase;
          font-weight: normal;
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        a {
          text-transform: uppercase;
          color: ${theme.light};
        }

        p {
          margin: 0;
          font-family: "T-Star";
        }

        footer {
          width: 100vw;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          color: ${theme.light};
          background-color: ${theme.dark2};
          padding: 2rem;
        }

        section {
          flex: 1;
          margin-right: 2rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

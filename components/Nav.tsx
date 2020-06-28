import Link from "next/link";
const Nav = () => {
  return (
    <div className="nav">
      <div className="row">
        <Link href="/talent">
          <a>Talent</a>
        </Link>

        <a href="#">Clients</a>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/story">
          <a>Story</a>
        </Link>
      </div>
      <div className="strikethrough"></div>
      <style jsx>
        {`
          .row {
            display: flex;
          }
          .strikethrough {
            position: absolute;
            top: 1.4rem;
            left: -2rem;
            right: -1rem;
            height: 2px;
            background-color: black;
          }
          .nav {
            position: relative;
            display: flex;
            flex-direction: row;
            margin: 1rem;
          }
          a {
            color: #292929;
            font-size: 2rem;
            font-family: "T-Star";
            text-transform: uppercase;
            text-decoration: none;
            margin-right: 2rem;
          }

          a:hover {
            padding-bottom: 1rem;
            margin-bottom: -1rem;
            transform: scale(1, -1);
          }
        `}
      </style>
    </div>
  );
};

export default Nav;

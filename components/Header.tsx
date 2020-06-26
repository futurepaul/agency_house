import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <img src="/ah_logo_small.svg" alt="Agency House logo" />
        </Link>
      </div>
      <Nav />
      <style jsx>
        {`
          header {
            width: 100vw;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 2rem;
            height: 133px;
          }
        `}
      </style>
    </header>
  );
};

export default Header;

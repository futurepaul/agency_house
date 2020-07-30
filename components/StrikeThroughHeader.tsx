export default ({ children, color = "black" }) => (
  <div className="line-through-header">
    {children}
    <div className="strikethrough"></div>
    <style jsx>
      {`
        .line-through-header {
          width: 100vw;
          display: flex;
          flex-direction: row;
          align-self: start;
          align-items: center;
          justify-content: center;
        }
        .strikethrough {
          position: absolute;
          height: 2px;
          width: 100vw;
          background-color: ${color};
        }
      `}
    </style>
  </div>
);

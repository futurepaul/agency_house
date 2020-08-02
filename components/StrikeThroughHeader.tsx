export default ({ children, color = "black", offset = 1.35 }) => (
  <div className="line-through-header">
    <div className="strikethrough"></div>
    {children}
    <style jsx>
      {`
        .line-through-header {
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .strikethrough {
           {
            /* position: absolute; */
          }
          height: 2px;
          margin-bottom: -${offset}rem;
          width: 100vw;
          background-color: ${color};
        }
      `}
    </style>
  </div>
);

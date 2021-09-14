// // import headerstyles from "../styles/Header.module.css";
// import headerStyles from "../styles/Header.module.css";
const Header = () => {
  const x = 2;
  return (
    <div>
      <h1 className="title">
        <span>web</span>nes
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;

import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Sojib
          </a>
          <div className="itemContainer">
            <span>+88 01742 393328</span>
          </div>
          <div className="itemContainer">
            <span>developersojib.01@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

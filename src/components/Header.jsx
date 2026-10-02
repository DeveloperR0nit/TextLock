import logo from "../assets/textlock-logo.png";
export default function Header() {
  return (
    <header className="header-sec">
      <a href="/">
        <img src={logo} alt="TextLock-logo" className="logo" />
        TextLock
      </a>
    </header>
  );
}

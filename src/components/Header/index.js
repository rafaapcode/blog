import LogoSvg from "../../svg/logo.svg";

export default function Header() {

  const descLogo = "Esssa é a logo do blog";

  return (
    <>
      <header className="flex-space-between">
        <div className="logo">
          <img src={LogoSvg} alt={descLogo}/>
        </div>
        <div className="search">
          <input type="text" className="input-search" name="search" />
        </div>
        <ul className="menu">
          <li><a href="#teste" className="nav-link">Categories</a></li>
          <li><a href="#teste" className="nav-link">About</a></li>
          <li><a href="#teste" className="nav-link">Contact</a></li>
        </ul>
      </header>
    </>
  )
}

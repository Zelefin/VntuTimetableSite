import logo from "../../assets/vntuLogo.png";

function Header() {
  return (
    <div className="bg-[#1A3459] flex items-center justify-center">
      <img src={logo} className="w-6 mr-1"></img>
      <h3 className="text-1xl font-bold text-white ">ВНТУ Розклад</h3>
    </div>
  );
}

export default Header;

import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div>
      <footer className="flex bg-enviro px-4  xl:px-60 py-7 justify-between  items-center">
        <div>
          <img src={Logo} alt="enviro-logo" className="w-24" />
        </div>
        <div>
          <h1 className="text-white">Todos os direitos reservados | 2022</h1>
        </div>
      </footer>
    </div>
  );
}

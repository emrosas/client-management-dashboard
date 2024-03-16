import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";

export default function Navbar() {
  return (
    <nav className="px-12 py-8 flex justify-between items-center">
      <img src={logo} alt="Made up company logo" className="size-12" />
      <div className="flex items-center gap-4">
        <p className="text-sm font-medium">Welcome back, John</p>
        <img src={avatar} alt="Avatar icon" />
      </div>
    </nav>
  );
}

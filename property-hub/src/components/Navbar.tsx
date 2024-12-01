import Image from "next/image";
import { Logo } from "./ImportImages";
import Link from "next/link";

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const menu = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Buy", link: "/buy" },
    { name: "Rent", link: "/rent" },
    { name: "Companies", link: "/companies" },
    { name: "Manage Rentals", link: "/manage-rentals" },
    { name: "Login", link: "/login" },
  ];

  return (
    <header className="px-24 fixed top-0 left-0 w-full z-50 bg-white-color shadow-md">
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="logo">
          <Image src={Logo} alt="9ja@PropertyHub" />
        </div>
        <div className="flex gap-10 justify-center items-center flex-1">
          {menu.map((item, index) => (
            <Link
              className={`hover:text-primary-color transition-colors `}
              key={index}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
          <button className="custom-btn">Register</button>
        </div>
        <div className="hamburger hidden">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

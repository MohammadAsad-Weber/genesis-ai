import { useState } from "react"; // useState Hook

// React-icons
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

// Interface for HamburgerMenu props
interface HamburgerMenuProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
// HamburgerMenu Component
function HamburgerMenu({ toggle, setToggle }: HamburgerMenuProps) {
  return (
    <section
      style={toggle ? { right: "0" } : { right: "-100%" }}
      className="h-full w-full fixed z-[9999] top-0 bg-[linear-gradient(180deg,_#7729aa_-13.13%,_#170a2d_0.17%,_#0a061d_6.9%,_rgba(10,6,30,0.99)_36.38%,_#010311_98.59%)] bg-no-repeat bg-cover transition-['right'] duration-500"
    >
      <div className="h-20 w-full px-3.5 flex items-center justify-between shadow-md shadow-[#aaaaaa59]">
        <h3 className="tracking-wider text-3xl font-semibold font-['Marcellus',_'san-serif']">
          Genesis AI
        </h3>
        <button
          onClick={() => setToggle(false)}
          className="cursor-pointer text-3xl"
        >
          <IoMdClose />
        </button>
      </div>
      <div className="mt-7.5 text-center flex flex-col gap-5 text-xl">
        <a
          href="/"
          className="transition-colors hover:text-violet-400 hover:underline"
        >
          Home
        </a>
        <a
          href="#"
          className="transition-colors hover:text-violet-400 hover:underline"
        >
          About Us
        </a>
        <a
          href="#"
          className="transition-colors hover:text-violet-400 hover:underline"
        >
          Blog
        </a>
        <a
          href="#"
          className="transition-colors hover:text-violet-400 hover:underline"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="transition-colors hover:text-violet-400 hover:underline"
        >
          Help Center
        </a>
      </div>
    </section>
  );
}

function Navbar() {
  // useState for toggle the HamburgerMenu
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="h-20 w-full px-3.5 sticky z-50 top-0 left-0 flex items-center justify-center bg-[#0b071e4d] md:px-5 backdrop-blur-xl shadow-md shadow-[#aaaaaa59]">
        <div className="h-full max-w-screen-xl w-full flex items-center justify-between">
          <h3 className="tracking-wider text-2xl font-semibold font-['Marcellus',_'san-serif'] lg:text-3xl">
            Genesis AI
          </h3>
          <div className="hidden text-lg font-light gap-7 md:flex">
            <a
              href="/"
              className="transition-colors hover:text-violet-400 hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="transition-colors hover:text-violet-400 hover:underline"
            >
              About Us
            </a>
            <a
              href="#"
              className="transition-colors hover:text-violet-400 hover:underline"
            >
              Blog
            </a>
            <a
              href="#"
              className="transition-colors hover:text-violet-400 hover:underline"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="transition-colors hover:text-violet-400 hover:underline"
            >
              Help Center
            </a>
          </div>
          <button
            onClick={() => setToggle(true)}
            className="cursor-pointer text-2xl md:hidden"
          >
            <RiMenu4Line />
          </button>
        </div>
      </nav>
      <HamburgerMenu toggle={toggle} setToggle={setToggle} />
    </>
  );
}

export default Navbar;

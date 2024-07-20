import NavLink from "./NavLink.jsx";
import { useEffect, useState } from "react";

export default function Nav({ curPage }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen((isOpen) => !isOpen);
    }

    let buttonContent = (
        <>
            <div className="transition-all w-full h-[2px] bg-white"></div>
            <div className="transition-all w-full h-[2px] bg-white"></div>
            <div className="transition-all w-full h-[2px] bg-white"></div>
        </>
    );

    if (isOpen) {
        buttonContent = (
            <>
                <div className="transition-all w-full h-[2px] bg-white transform rotate-45 translate-y-[9.5px]"></div>
                <div className="transition-all w-full h-[2px] bg-white opacity-0"></div>
                <div className="transition-all w-full h-[2px] bg-white transform -rotate-45 -translate-y-[9.5px]"></div>
            </>
        );
    }
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>
            <nav
                className={`flex flex-col items-center fixed w-full transition-all duration-500 ${isScrolled ? 'bg-black' : 'bg-transparent'} z-50`}
            >
                <div className={`h-[75px] flex justify-between py-5 transition-all duration-300  sm:bg-transparent px-10 w-full lg:w-[1024px] ${isOpen && "bg-black"}`}>
                    <h1 className="font-bold text-2xl">BoituXZ</h1>
                    <ul className="sm:flex gap-10 hidden">
                        <NavLink
                            page="Home"
                            to="/"
                            isActive={curPage === "Home"}
                        />
                        <NavLink
                            page="Blog"
                            to="/blog"
                            isActive={curPage === "Blog"}
                        />
                        <NavLink
                            page="About"
                            to="/about"
                            isActive={curPage === "About"}
                        />
                    </ul>

                    <button
                        className="sm:hidden  w-[24px] flex flex-col justify-evenly"
                        onClick={handleClick}
                    >
                        {buttonContent}
                    </button>

                    <h1 className="font-bold text-2xl invisible sm:block hidden">
                        BoituXZ
                    </h1>
                </div>

                {isOpen && (
                    <ul className={`pb-6 sm:hidden gap-4 flex flex-col items-end transition-all duration-300 animate-fade px-10 w-full ${isOpen && "bg-black"}`}>
                        <NavLink
                            page="Home"
                            to="/"
                            isActive={curPage === "Home"}
                        />
                        <NavLink
                            page="Blog"
                            to="/blog"
                            isActive={curPage === "Blog"}
                        />
                        <NavLink
                            page="About"
                            to="/about"
                            isActive={curPage === "About"}
                        />
                    </ul>
                )}
            </nav>
        </>
    );
}

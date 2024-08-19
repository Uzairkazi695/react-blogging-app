import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiMenuBurger } from "react-icons/ci";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="shadow">
      <Container>
        <nav className="flex relative">
          <div className="mr-4">
            <Link to={"/"}>
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="md:flex justify-center items-center md:ml-auto hidden">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          <span
            className="md:hidden flex justify-center items-center absolute right-3 top-1/2 text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CiMenuBurger />
          </span>
        </nav>
        {isOpen && (
          <>
            <ul className="md:flex justify-center items-center md:ml-aut">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </>
        )}
      </Container>
    </header>
  );
}

export default Header;

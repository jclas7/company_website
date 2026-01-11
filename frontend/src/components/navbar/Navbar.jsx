import { React, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";

const menuItems = [
  { path: "/", label: "홈" },
  { path: "/about", label: "회사 정보" },
  { path: "/leadership", label: "임원소개" },
  { path: "/board", label: "업무 게시판" },
  { path: "/our-service", label: "제공 기술" },
  { path: "/contact", label: "문의하기" },
];

const MenuItem = ({ path, label, onClick }) => (
  <li>
    <Link
      to={path}
      className="hover:text-blue-600 transition duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

function Navbar() {
  const [language, setLanguage] = useState("ko");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#0253cc] to-[#3e8cf1] text-gray-100 p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold lg:ml-12 lg:mr-8">
          {isOpen ? <AiFillHome /> : <a href="/"> JC Company</a>}
        </h1>
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-8 text-sm">
            {menuItems.map((item) => (
              <MenuItem key={item.path} {...item} />
            ))}
          </ul>
        </div>
        {language}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="hidden lg:block px-3 ml-8 border rounded-md bg-blue-400 hover:border-blue-500"
        >
          <option>한국어</option>
          <option>영어</option>
        </select>
        <button
          className="lg:hidden text-2xl"
          aria-label="메뉴"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-100 text-black transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4 bg-blue-100">
          <button
            className="text-2xl mb-8 float-right"
            onClick={toggleMenu}
            aria-label="닫기"
          >
            <HiX />
          </button>
          <ul className="clear-both space-y-4 pt-8 text-lg">
            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                {...item}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              ></MenuItem>
            ))}
          </ul>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-6 w-full px-3 py-1 border rounded-md text-black bg-blue-300 hover:border-blue-500 transition duration-300"
          >
            <option value="ko">한국어</option>
            <option value="en">영어</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

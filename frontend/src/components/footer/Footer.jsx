import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const scrollToTop = () => {
  //alert("홈");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Footer() {
  return (
    <footer className="bg-blue-200 text-black-100">
      <div className="continer mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">회사 소개</h3>
            <p className="text-gray-800">
              저희 회사는 최고의 서비스를 제공합니다.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">빠른링크</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-red-500 transition-colors"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-red-500 transition-colors"
                >
                  회사정보
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-red-500 transition-colors"
                >
                  임원 소개
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-red-500 transition-colors"
                >
                  업무 게시판
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-red-500 transition-colors"
                >
                  문의 게시판
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-900">
              <li>서울특별시 강남구</li>
              <li>삼성동 123번지</li>
              <li>전화 : 02-111-1111</li>
              <li>이메일:</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">소셜미디어</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-800 hover:text-white transtion-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-blue-800 hover:text-white transtion-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-blue-800 hover:text-white transtion-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-gray-900">
          <p>&copy; 2026 JC Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

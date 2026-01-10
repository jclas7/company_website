import React from "react";
import Hero from "./Hero";
import Forum from "./Forum";
import Contact from "./Contact";

function MainPage(props) {
  return (
    <div>
      {/* <div className="py-72 bg-gradient-to-br from-[#eed3be] to-[rgb(255,255,255)]">
      main페이지
      <div className="">입을 열고 , 설명을 하세요~~</div>
      <div className="">실패에 대한 연구</div> */}
      <Hero />
      <Forum />
      <Contact />
    </div>
  );
}

export default MainPage;

import React from "react";
import logo from "../logo.jpg";
function ImageNoRoom(props) {
  return (
    <div className="w-[1080px] h-[1920px]">
      <div className="pt-[500px] ">
        <img src={logo} alt="logo" className="w-[800px]  mx-auto pt-[30px]" />
        <div className="pt-[30px]">
          <p className="font-bold text-center text-[90px] text-[#808080] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Chào mừng đã đến
            <br /> Viện Quản Trị và Công Nghệ FSB
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageNoRoom;

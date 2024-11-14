import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import logo from "../logo.svg";
import animation from "../Source/animation.json";
import dayjs from "dayjs";
export default function TableRoom(data) {
  const roomInfor = data.roomInfor;
  const getColorFromCode = (code) => {
    if (code.includes("MM")) {
      return "#ff9900";
    }
    if (code.includes("MSE")) {
      return "#34a853";
    }
    if (code.includes("SEM")) {
      return "#3c78d8";
    }
    if (code.includes("LBM")) {
      return "#9900ff";
    }
  };
  const getHour = () => {
    return dayjs().hour();
  };

  const roomList = ["601", "702", "704", "706", "702 + 704"];

  const getKhungGio = () => {
    if (getHour() < 10) {
      return "9h-12h";
    } else {
      if (getHour() < 14) {
        return "13h30-16h30";
      } else {
        return "18h-21h";
      }
    }
  };

  return (
    <div className="w-[1080px] h-[1920px]">
      <img src={logo} alt="logo" className="w-[600px] mx-auto pt-[30px]" />
      <div className="pt-[30px]">
        <p className="font-bold text-center text-[90px] text-[#808080] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Chào mừng các anh/chị học viên
        </p>
      </div>
      <div className="table mx-auto mt-[30px] ">
        <p className="text-[40px] mx-auto font-bold">
          Lịch học tại cơ sở FSB Hồ Chí Minh
        </p>
        <p id="txtDate" className="mx-auto text-[32px] text-center mb-[10px]">
          {dayjs().format("DD/MM/YYYY")}: {getKhungGio()}
        </p>
        <div className="table w-full h-[600px]">
          <table
            id="table"
            className=" border  text-[30px] border-[2px] w-full "
          >
            <thead>
              <tr className="h-[120px]">
                <th className="w-1/2 border border-[1.5px] bg-[#F56E23] font-bold text-white">
                  Phòng
                </th>
                <th className="w-1/2 border border-[1.5px] bg-[#F56E23] text-white">
                  Lớp
                </th>
              </tr>
            </thead>

            <tbody>
              {roomInfor &&
                JSON.parse(roomInfor).map((value, index) => {
                  if (value !== "") {
                    return (
                      <tr id="T702" className="h-[120px]" key={value}>
                        <td
                          className={
                            "border border-[1.5px] text-center font-bold"
                          }
                        >
                          {roomList[index]}
                        </td>
                        <td
                          style={{
                            color: getColorFromCode(String(value)),
                          }}
                          className={`border  border-[1.5px] text-center font-bold`}
                          id="V702"
                        >
                          {value}
                        </td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Player
        autoplay
        loop
        speed={5}
        src={animation}
        style={{ height: "600px", width: "600px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
}

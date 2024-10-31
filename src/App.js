import animation from "./Source/animation.json";
import "./App.css";
import { useEffect, useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import logo from "./logo.svg";
import axios from "axios";
import Papa from "papaparse";
import dayjs from "dayjs";

function App() {
  const roomList = ["601", "702", "704", "706"];

  const [roomInfor, setRoomInfor] = useState();

  const getHour = () => {
    return dayjs().hour();
  };

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

  const getBuoi = () => {
    if (getHour() < 10) {
      return "sáng";
    } else {
      if (getHour() < 14) {
        return "chiều";
      } else {
        return "tối";
      }
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTfoW2x95tXrr-GX6noe1rMPu2DD6-BvqMFt9gxIqJVuEL8cI86XWUGqS5GuVdY7Hd4H6yilnpFVUb_/pub?gid=2117239928&single=true&output=csv"
      )
      .then((res) => {
        const roomInfors = Papa.parse(res.data).data;
        setRoomInfor(roomInfors[roomInfors.length - 1][1]);
      });
  }, []);

  return (
    <div className="App">
      <img src={logo} alt="logo" className="w-[600px] mx-auto pt-[30px]" />
      <div className="pt-[30px]">
        <p className="font-bold text-center text-[90px] text-[#808080] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Chào mừng các anh/chị học viên
        </p>
      </div>
      <div className="table mx-auto mt-[30px] ">
        <p className="text-[40px] mx-auto font-bold">
          Lịch học buổi {getBuoi()} tại cơ sở FSB Hồ Chí Minh
        </p>
        <p id="txtDate" className="mx-auto text-[25px] text-center mb-[10px]">
          {dayjs().format("DD/MM/YYYY")}
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

export default App;

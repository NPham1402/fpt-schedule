import animation from "./Source/animation.json";
import "./App.css";
import { useEffect, useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import logo from "./logo.svg";
import axios from "axios";
import Papa from "papaparse";
import dayjs from "dayjs";
import { useCookies } from "react-cookie";

function App() {
  const [cookie, setcookie, removecookie] = useCookies("roominfor");
  const roomList = ["601", "702", "704", "706"];
  const [roomInfor, setRoomInfor] = useState();
  const getHour = () => {
    return dayjs().hour();
  };
  const getFormatCode = () => {
    if (getHour() < 10) {
      return "S" + dayjs().format("DDMMYYYY");
    } else {
      if (getHour < 14) return "C" + dayjs().format("DDMMYYYY");
      else return "T" + dayjs().format("DDMMYYYY");
    }
  };
  useEffect(() => {
    axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTfoW2x95tXrr-GX6noe1rMPu2DD6-BvqMFt9gxIqJVuEL8cI86XWUGqS5GuVdY7Hd4H6yilnpFVUb_/pub?gid=2117239928&single=true&output=csv"
      )
      .then((res) => {
        const roomInfors = Papa.parse(res.data).data;

        console.log(roomInfors);
        setRoomInfor(roomInfors[roomInfors.length - 1]);
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
          Lịch học của FSB tại cơ sở Nguyễn Gia Thiều{" "}
        </p>
        <p id="txtDate" className="mx-auto text-[25px] text-center mb-[10px]">
          {dayjs().format("DD/MM/YYYY")}
        </p>
        <div className="table w-full h-[600px]">
          <table
            id="table"
            className=" border  text-[30px] border-[2px] w-full "
          >
            <tr className="h-[120px]">
              <th className="border border-[1.5px] bg-[#F56E23] font-bold text-white">
                Phòng
              </th>
              <th className="border border-[1.5px] bg-[#F56E23] text-white">
                Lớp
              </th>
            </tr>
            {roomInfor &&
              JSON.parse(roomInfor[1]).map((value, index) => {
                if (value !== "") {
                  return (
                    <tr id="T702" className="h-[120px]">
                      <td className="border border-[1.5px] text-center font-bold">
                        {roomList[index]}
                      </td>
                      <td
                        className="border border-[1.5px] text-center font-bold"
                        id="V702"
                      >
                        {value}
                      </td>
                    </tr>
                  );
                }
              })}
          </table>
          <p
            id="notification"
            className="text-[50px] text-[#51c170] font-bold text-center mt-[200px] hidden drop-shadow-[0_1.2px_1.2px_rgba(245,110,35,0.8)]"
          >
            Chưa có lịch học
          </p>
        </div>
      </div>
      <Player
        autoplay
        loop
        speed={4}
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

import "./App.css";
import { useEffect, useState } from "react";

import banner from "./Source/standee-LED.png";
import axios from "axios";
import Papa from "papaparse";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TableRoom from "./Compoent/TableRoom";
function App() {
  const [roomInfor, setRoomInfor] = useState();
  const [isNoRoom, setNoRoom] = useState(0);

  const isCheckNoRoomInDay = (data) => {
    console.log(data);
    return JSON.parse(data).filter((room) => room === "").length;
  };

  useEffect(() => {
    axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTfoW2x95tXrr-GX6noe1rMPu2DD6-BvqMFt9gxIqJVuEL8cI86XWUGqS5GuVdY7Hd4H6yilnpFVUb_/pub?gid=2117239928&single=true&output=csv"
      )
      .then((res) => {
        const roomInfors = Papa.parse(res.data).data;
        setRoomInfor(roomInfors[roomInfors.length - 1][1]);
        if (isCheckNoRoomInDay(roomInfors[roomInfors.length - 1][1]) !== 4) {
          console.log(roomInfors);
          setNoRoom(1);
        } else {
          setNoRoom(2);
        }
      });
  }, []);

  return (
    <>
      {isNoRoom === 2 && (
        <img src={banner} alt="BANNER" className="w-[1080px] h-[1920px]" />
      )}
      {isNoRoom === 1 && <TableRoom roomInfor={roomInfor} />}
      {isNoRoom === 0 && (
        <SkeletonTheme>
          <div className="w-full h-full">
            <Skeleton
              count={1}
              style={{
                width: "600px",
                height: "500px",
                borderRadius: "100px",
                marginLeft: "25%",
                marginTop: "30px",
                marginRight: "auto",
              }}
              // customHighlightBackground="linear-gradient(120deg, #0064b4 10%, #f56e23 50%, #0fb44b 100%)"
            />
            <br />
            <br />
            <Skeleton
              count={2}
              style={{
                width: "94%",
                height: "66px",
                marginLeft: "40px",
                marginTop: "10px",
              }}
              // customHighlightBackground="linear-gradient(120deg, #0064b4 10%, #f56e23 50%, #0fb44b 100%)"
            />
            <br />
            <Skeleton
              count={2}
              style={{
                width: "70%",
                height: "33px",
                marginLeft: "180px",
                marginTop: "10px",
              }}

              // customHighlightBackground="linear-gradient(120deg, #0064b4 10%, #f56e23 50%, #0fb44b 100%)"
            />
            <br />
            <Skeleton
              count={4}
              style={{
                width: "40%",
                height: "120px",
                marginLeft: "330px",
                marginTop: "10px",
              }}

              // customHighlightBackground="linear-gradient(120deg, #0064b4 10%, #f56e23 50%, #0fb44b 100%)"
            />

            <br />
            <Skeleton
              count={1}
              style={{
                width: "400px",
                height: "400px",
                marginLeft: "32%",
                marginTop: "30px",
                marginRight: "auto",
              }}
              // customHighlightBackground="linear-gradient(120deg, #0064b4 10%, #f56e23 50%, #0fb44b 100%)"
            />
          </div>
        </SkeletonTheme>
      )}
    </>
  );
}

export default App;

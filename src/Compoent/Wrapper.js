import React from "react";

export default function Wrapper() {
  return (
    <div className="w-full h-full text-white">
      <div className="w-[600px] mx-auto pt-[30px]" />
      <div className="pt-[30px]">
        <p className="font-bold text-center text-[90px] text-[#808080] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          .
        </p>
      </div>
      <div className="table mx-auto mt-[30px] ">
        <p className="text-[40px] mx-auto font-bold">.</p>
        <p
          id="txtDate"
          className="mx-auto text-[32px] text-center mb-[10px]"
        ></p>
        <div className="table w-full h-[600px]">
          <table
            id="table"
            className=" border  text-[30px] border-[2px] w-full "
          >
            <thead>
              <tr className="h-[120px]">
                <th className="w-1/2 border border-[1.5px] bg-[#F56E23] font-bold text-white">
                  .
                </th>
                <th className="w-1/2 border border-[1.5px] bg-[#F56E23] text-white">
                  .
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div style={{ height: "600px", width: "600px" }}></div>
    </div>
  );
}

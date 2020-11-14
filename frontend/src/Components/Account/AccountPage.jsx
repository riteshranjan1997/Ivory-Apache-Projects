import React from "react";
import SideBar from "./SideBar";
import Bar from "../common/AppBar";

export default function AccountPage() {
  return (
    <>
      <Bar />
      <div style={{ marginTop: "50px" }}>
        <SideBar />
      </div>
    </>
  );
}

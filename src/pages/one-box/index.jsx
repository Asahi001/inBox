import React, { useEffect } from "react";
import "./onebox.css";
import mailImg from "../../assets/Mail.png";
import Home from "../../assets/Home.png";
import User from "../../assets/User.png";
import Message from "../../assets/Message.png";
import Kite from "../../assets/Kite.png";
import Burger from "../../assets/Burger.png";
import Inbox from "../../assets/Inbox.png";
import Chart from "../../assets/Chart.png";
import Header from "./components/header";
import EmptyInbox from "./components/emptyInbox";
import InboxPage from "./components/inbox";

export default function OneBox() {
  const mainActionIcons = [Home, User, Message, Kite, Burger, Inbox, Chart];
  const loginUser = "AS";
  const emptyInbox = false;

  const currentHref = window.location.href;

  async function getAllMails() {
    const URL = `http://localhost:3000/api/v1/onebox/list`;
    await fetch(URL, {
      method: "GET",
      credentials: "include",
    }).then((ele) => {
      console.log(ele);
    });
  }

  useEffect(() => {
    getAllMails();
  }, []);

  return (
    <div className="fullBackGround">
      <div className="taskBar">
        <div style={{ height: "70px" }} className="flex items-center">
          <span className="flex justify-center mailIcon">
            <img
              src={mailImg}
              alt="Image_Not_Found"
              width={"32px"}
              height={"32px"}
            />
          </span>
        </div>
        <div className="mainActions">
          <div className="flex flex-col gap-8">
            {mainActionIcons.map((icon, idx) => {
              return (
                <span key={idx} className="flex justify-center">
                  <img
                    src={icon}
                    alt="Image_Not_Found"
                    width={icon == Home ? "28px" : "20px"}
                    height={icon == Home ? "28px" : "20px"}
                  />
                </span>
              );
            })}
          </div>
        </div>
        <div className="taskFooter flex justify-center items-center">
          <div className="userSign flex justify-center items-center">
            {loginUser}
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
      <div className="oneBox">
        <Header />
        {emptyInbox ? <EmptyInbox /> : <InboxPage />}
      </div>
    </div>
  );
}

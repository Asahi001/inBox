import React, { useContext } from "react";
import Reload from "../../../assets/Reload.png";
import "../../one-box/onebox.css";
import { GlobalContext } from "../globalContext";

export default function AllMailList({ allMailList }) {
  const { darkMode } = useContext(GlobalContext);
  const allMails = allMailList?.mailsList;
  const mailsSelected = 0;
  const newReplies = 0;
  const listOfReplaySelection = ["Newest"];

  const getDisplayDate = (rawDate) => {
    const months = [
      "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
    ];
    const fullDate = new Date(rawDate);
    const month = months[fullDate.getMonth()];
    const date = fullDate.getDate();
    return `${month} ${date}`
  };

  return (
    <div className="flex flex-col w-full px-4 pt-2 gap-4">
      <span>
        <div className="flex items-center place-content-between">
          <span className="flex gap-2 listTitle items-center">
            All Inbox(s){" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-down"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <button style={{ width: "32px", height: "32px" }}>
            <img src={Reload} alt="Reload" />
          </button>
        </div>
        <span>
          <span style={{ fontSize: "bold" }}>
            {mailsSelected + "/" + allMails.length}
          </span>
          <span style={{ color: "#7F7F7F" }}> Inboxes Selected</span>
        </span>
      </span>

      <div className="text-white flex flex-col gap-2">
        <span className="flex" style={{ border: "1px solid #33383f" }}>
          <button className="listSearchBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <input
            className="w-full pl-2 listSearchBox"
            name="search"
            id="search"
            placeholder="Search"
          />
        </span>
        <span className="w-full flex place-content-between">
          <span className="w-full flex gap-1">
            <div className="replayCount flex justify-center items-center">
              {newReplies}
            </div>
            <span>New Replies</span>
          </span>
          <select
            name="replayType"
            id="replayType"
            className={`${darkMode ? "selectUser" : "selectUserLight"}`}
          >
            {listOfReplaySelection.map((type, idx) => {
              return (
                <option key={idx} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </span>
      </div>

      <div className="fullList h-96 overflow-y-auto">
        {allMails.map((mail, idx) => {
          return (
            <div key={mail?.id || idx} className="flex flex-col listCell py-4">
              <span className="w-full flex place-content-between">
                <span className="fromMailId">{mail?.fromEmail || ""}</span>
                <span className="fronDate">{getDisplayDate(mail?.sentAt)}</span>
              </span>
              <span className="fronDate">
                {mail?.subject}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

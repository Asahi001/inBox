import React, { useContext, useState } from "react";
import "../../one-box/onebox.css";
import { GlobalContext } from "../globalContext";

import Dots from "../../../assets/more_horiz.png";
import Replay from "../../../assets/Replay.png";

export default function ActionPanel({ selectedMail }) {
  const currentMail = selectedMail?.mail;
  const [status, setStatus] = useState("");
  const [action, setAction] = useState("");

  const { darkMode } = useContext(GlobalContext);

  const statusList = [
    "Meeting Completed",
    "Interested",
    "Closed",
    "Meeting Booked",
  ];
  const actionList = ["Move"];

  const apiThreadRes = [
    {
      id: 2,
      fromName: "Mitrajit Chandra",
      fromEmail: "mitrajit2022@gmail.com",
      toName: "",
      toEmail: "shaw@getmemeetings.com",
      cc: null,
      bcc: null,
      threadId: 1,
      messageId: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      inReplyTo: null,
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject:
        "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      body: "<p>How are you Shaw?</p><p>Thanks for reaching out over our web chat.</p><p>How can I help you with your project?</p><p>Please let me know if you need anything else.</p><p>Regards,<br/>Mitrajit Chandra</p><p>7ZG2ZTV 6KG634E</p>",
      isRead: true,
      folder: "INBOX",
      uid: 52,
      sentAt: "2023-11-21T00:39:19.000Z",
      archivedAt: null,
      createdAt: "2023-11-23T07:38:46.000Z",
      updatedAt: "2023-11-23T07:38:46.000Z",
      deletedAt: null,
    },
    {
      id: 3,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: null,
      bcc: null,
      threadId: 1,
      messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject:
        "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      body: "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
      isRead: true,
      folder: "INBOX",
      uid: 594,
      sentAt: "2023-11-23T04:08:45.000Z",
      archivedAt: null,
      createdAt: "2023-11-23T07:38:46.000Z",
      updatedAt: "2023-11-23T07:38:46.000Z",
      deletedAt: null,
    },
  ];

  function renderAllList(email) {
    return (
      <div
        className={`flex flex-col p-4 rounded-lg ${
          darkMode ? "darkBg" : "lightBg"
        } mb-2`}
      >
        <span className="flex flex-row w-full place-content-between gap-8">
          <span className="flex flex-col gap-2">
            <span>{email?.subject}</span>
            <span>from : {email?.fromEmail}</span>
            <span>to : {email?.toEmail}</span>
          </span>
          <span className="w-4/12 flex justify-end">
            20 june 2022 : 9:16 AM
          </span>
        </span>
        <span>
          {email?.body ? (
            <div dangerouslySetInnerHTML={{ __html: email?.body }} />
          ) : (
            <></>
          )}
        </span>
      </div>
    );
  }

  return (
    <div className="grid grid-flow-row grid-row-10 h-full">
      <div className="displayDesc w-full flex items-center place-content-between row-span-1 min-h-24">
        <div className="flex flex-col gap-1">
          <span className="mainFromName">{currentMail?.fromName}</span>
          <span className="mainFromEmail">{currentMail?.fromEmail}</span>
        </div>
        <div className="flex gap-2">
          <select
            name="status"
            id="status"
            className={`${
              darkMode ? "selectUser" : "selectUserLight"
            } rounded-sm px-2 py-1.5`}
          >
            {statusList.map((state, idx) => {
              return (
                <option key={idx} value={status}>
                  {state}
                </option>
              );
            })}
          </select>

          <select
            name="action"
            id="action"
            className={`${
              darkMode ? "selectUser" : "selectUserLight"
            } rounded-sm px-2 py-1.5`}
          >
            {actionList.map((ele, idx) => {
              return (
                <option key={idx} value={action}>
                  {ele}
                </option>
              );
            })}
          </select>

          <button
            className={`${
              darkMode ? "selectUser" : "selectUserLight"
            } rounded-sm dotBtn flex justify-center items-center px-2 py-1.5`}
          >
            <img src={Dots} alt="..." width={16} height={16} />
          </button>
        </div>
      </div>

      <div className="row-span-8">
        <div className="px-4 pt-2 mainHeight overflow-y-auto">
          {apiThreadRes.map((ele, idx) => {
            return (
              <div key={idx} className="flex flex-col gap-4">
                {renderAllList(ele)}{" "}
              </div>
            );
          })}
        </div>
      </div>

      <div className="row-span-1 px-4">
        <button
          className="btn w-32 h-8 mb-4 mt-2 rounded-lg flex gap-2 justify-center grdBtn row-span-1 border-white"
          type="button"
        >
          <img src={Replay} alt="NAN" width={18} height={15}></img>
          Replay
        </button>
      </div>
    </div>
  );
}

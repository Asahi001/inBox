import React, { useContext } from "react";
import emptyInboxImg from "../../../assets/EmptyInbox.png";
import { GlobalContext } from "../globalContext";

export default function EmptyInbox() {
  const { darkMode } = useContext(GlobalContext);

  return (
    <div
      className={` ${
        darkMode ? "emptyInbox" : "emptyInboxLight"
      } flex justify-center flex-col items-center gap-12`}
    >
      <img
        src={emptyInboxImg}
        alt="Image Not Found"
        width={280}
        height={230}
      ></img>
      <div className="flex flex-col gap-6">
        <span className={`${darkMode ? "noInboxMsg1" : "noInboxMsg1Light"}`}>
          It’s the beginning of a legendary sales pipeline
        </span>
        <span className="flex flex-col">
          <span
            className={`${
              darkMode ? "noInboxMsg2" : "noInboxMsg2Light"
            } flex justify-center`}
          >
            When you have inbound E-mails
          </span>
          <span
            className={`${
              darkMode ? "noInboxMsg2" : "noInboxMsg2Light"
            } flex justify-center`}
          >
            you’ll see them here
          </span>
        </span>
      </div>
    </div>
  );
}

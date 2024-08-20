import React, { useContext, useEffect, useState } from "react";
import "../onebox.css";
import { GlobalContext } from "../globalContext";

export default function Header() {
  const users = [{ name: "Tim's Workspace", id: "1" }];
  const [selectedUser, setSelectedUser] = useState("Tim's Workspace");
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <div
      className={`fullBackGround  ${
        darkMode ? "headBar" : "headBarLight"
      } flex items-center place-content-between`}
    >
      <span>Onebox</span>

      <div className="flex space-x-6">
        <label class="switch">
          <input
            type="checkbox"
            onChange={(event) => {
              setDarkMode(!event?.target?.checked);
            }}
          />
          <span class="slider round flex items-center place-content-between px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gold"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-moon"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gold"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-sun"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </span>
        </label>

        <select
          name="userSelect"
          id="userSelect"
          className={`${darkMode ? "selectUser" : "selectUserLight"}`}
        >
          {users.map((user, idx) => {
            return (
              <option key={idx} value={selectedUser}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

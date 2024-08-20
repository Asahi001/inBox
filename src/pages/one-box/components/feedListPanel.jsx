import React, { useContext } from "react";
import { GlobalContext } from "../globalContext";

export default function FeedListPanel() {
  const { darkMode } = useContext(GlobalContext);

  const leadList = [
    { value: "Orlando", label: "Name" },
    { value: "+54-906282786", label: "Contact No" },
    { value: "orlando@gmail.com", label: "Email ID" },
    { value: "linkedin.com/in/tts", label: "Linkedin" },
    { value: "Reachinbox", label: "Company Name" },
  ];

  const campaignName = "Campaign Name";
  const campaignDaysinSeq = "5";

  const campaignList = [
    {
      email: "Email",
      date: "3rd, Feb",
      status: "Sent",
    },
    {
      email: "Email",
      date: "5th, Feb",
      status: "Opened",
    },
    {
      email: "Email",
      date: "5th, Feb",
      status: "Opened",
    },
  ];

  function generateList(label, value, idx) {
    return (
      <span
        key={idx}
        className={`${
          darkMode ? "feedTxt" : "feedTxtLight"
        } flex flex-col gap-6 px-2`}
      >
        <span className="flex flex-row w=full place-content-between">
          <span className={`${!darkMode ? "txtLt" : null}`}>{label}</span>
          <span>{value}</span>
        </span>
      </span>
    );
  }

  return (
    <div className="h-full grid grid-flow-row grid-rows-2 py-4 px-1">
      <div className="flex flex-col gap-4">
        <span className={`${darkMode ? "feedHeading" : "feedHeadingLight"}`}>
          Lead Details
        </span>

        {leadList.map((lead, idx) => {
          return generateList(lead?.label, lead?.value, idx);
        })}
      </div>

      <div className="flex flex-col gap-4">
        <span className={`${darkMode ? "feedHeading" : "feedHeadingLight"}`}>
          Activities
        </span>

        <span className="flex flex-col pl-8 gap-2">
          <span className="feedCampTitle">{campaignName}</span>
          <span>
            {campaignList.length} steps | {campaignDaysinSeq} Days in Sequence
          </span>
        </span>
      </div>
    </div>
  );
}

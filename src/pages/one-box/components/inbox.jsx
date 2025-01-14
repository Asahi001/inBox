import React, { useContext } from "react";
import "../../one-box/onebox.css";
import { GlobalContext } from "../globalContext";
import AllMailList from "./allMailList";
import ActionPanel from "./actionPanel";
import FeedListPanel from "./feedListPanel";

export default function InboxPage() {
  const { darkMode } = useContext(GlobalContext);

  const mailsList = [
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
    {
      id: 4,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: null,
      bcc: null,
      threadId: 2,
      messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject: "Test mail",
      body: "<p>Test mail</p>",
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

  return (
    <div
      className={` ${
        darkMode ? "emptyInbox" : "emptyInboxLight"
      } grid grid-flow-row grid-cols-9`}
    >
      <div className="mailListContainer col-span-2">
        <AllMailList allMailList={{ mailsList: mailsList }} />
      </div>
      <div className="actionContainer col-span-5">
        <ActionPanel selectedMail={{ mail: mailsList[0] }} />
      </div>
      <div className="feedContainer col-span-2">
        <FeedListPanel />
      </div>
    </div>
  );
}

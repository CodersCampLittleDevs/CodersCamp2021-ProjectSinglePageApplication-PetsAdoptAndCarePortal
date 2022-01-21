import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { AnnouncementsContexProvider } from "./context/announcements/announcements-context";

ReactDOM.render(
  <React.StrictMode>
    <AnnouncementsContexProvider>
      <App />
    </AnnouncementsContexProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

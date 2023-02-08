import React from "react";
import "./style.css"

function Footer () {
  return (
    <footer className="footer">
      <h3 className="tasks-active">Active tasks: </h3>
      <h3 className="tasks-finished">Finished tasks: </h3>
      <h3 className="tasks-creator">Kanban board by </h3>
    </footer>
  )
}

export default Footer;
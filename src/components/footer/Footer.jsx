import React from "react";
import "./style.css"

function Footer({tasks}) {


  return (
    <footer className="footer">
      <h3 className="tasks-active">Active tasks: {tasks.filter(task => task.status === "backlog").length}</h3>
      <h3 className="tasks-finished">Finished tasks: {tasks.filter(task => task.status === "finished").length}</h3>
      <h3 className="tasks-creator">Kanban board by Ivan </h3>
    </footer>
  )
}

export default Footer;
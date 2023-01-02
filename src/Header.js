import React, { useState } from "react";
import { CButton } from "@coreui/react";
import Carrd from "./Carrd";
import GetDate from "./GetDate";
import "./header.css";
import "./Carrd.css";

export default function Header() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [completedtask, setCompletedTask] = useState([]);

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  // Function to add task as a to-do item
  const addNote = () => {
    // console.log(notes);
    if (note !== "") {
      const addnotes = {
        id: Math.floor(Math.random() * 10000),
        value: note,
      };
      setNotes([...notes, addnotes]);
    }
  };

  // Function to add item as a completed task and removing it from Pending task list
  const coompletedtask = (e, id, value) => {
    e.preventDefault();
    const completenotes = {
      id: id,
      value: value,
    };
    setCompletedTask([...completedtask, completenotes]);

    setNotes(notes.filter((t) => t.id !== id));
    // console.log(completedtask);
  };

  // Function to delete the to-do task from Pending task list
  const deleteTask = (e, id) => {
    e.preventDefault();
    setNotes(notes.filter((t) => t.id !== id));
  };

  return (
    // Top Container
    <div className="top-container">
      {/* Input field to take input from user*/}
      <div className="input-text">
        <input
          type="text"
          name="note-title"
          className="note-title"
          placeholder="Enter your Task"
          onChange={(e) => handleChange(e)}
        />

        <button type="button" className="btn info add-btn" onClick={addNote}>
          Add Task
        </button>
      </div>
      <br />
      <br />
      {/*Pending Task List*/}
      {notes.length !== 0 ? (
        <>
          <h1>Pending Tasks</h1>
          <br />
          <div className="row">
            {notes.map((i) => (
              <div class="cardC my-2 mx-2 card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{i.value}</h5>
                  <p class="card-text">

                    <GetDate />
                  </p>
                </div>

                <div class="buttons">
{/*Complete Button to move the completed task from Pending Tasks list to Completed Tasks list*/}
                  <CButton
                    className="complete btn success"
                    onClick={(e) => coompletedtask(e, i.id, i.value)}
                  >
                    Completed
                  </CButton>
{/*Delete Button to delete the to-do task from pending list*/}
                  <CButton
                    className="delete btn danger"
                    onClick={(e) => deleteTask(e, i.id)}
                  >
                    Delete
                  </CButton>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
      <br /> <br />
{/*Completed Tasks list*/}
      <div className="complete">
        {completedtask.length !== 0 ? (
          <div>
            <h1>Completed Tasks</h1>
            <br />
            <div className="row">
              {completedtask.map((i) => (
                <Carrd props={i.value} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

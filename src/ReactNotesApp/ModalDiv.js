import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Plus } from "react-feather";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./modal.css";

function ModalDiv({ setshowModal, showModal, refresher}) {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [background, setbackground] = useState("#F9F5EB");
  const [forground, setforground] = useState("#fff");
  const [priority, setpriority] = useState("normal");

  const handleAdd = () => {
    const savedData = JSON.parse(localStorage.getItem("myNotes")) || [];
    if (!title || !content) {
      return alert("Title and content is Required");
    }
    let newData = {
      id: Date.now(),
      title,
      content,
      priority,
      background,
      forground,
      date: new Date().toLocaleDateString(),
    };
    savedData.push(newData);
    localStorage.setItem("myNotes", JSON.stringify(savedData));
    settitle("");
    setcontent("");
    setpriority("normal");
    setshowModal(false);
    // window.location.reload();
    refresher()
  };

  const handlecancle = () => {
    settitle("");
    setcontent("");
    setpriority("normal");
    setshowModal(false);
  };

  const handleColor = (bg, fg) => {
    setbackground(bg);
    setforground(fg);
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control mb-3"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <label>Priority</label>
          <select
            className="form-control mb-3"
            value={priority}
            onChange={(e) => setpriority(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
          <textarea
            className="form-control"
            style={{ height: "180px" }}
            placeholder="Enter Notes...."
            value={content}
            onChange={(e) => setcontent(e.target.value)}
          />
          <DropdownButton id="dropdown-basic-button" title="Select Theme">
            <Dropdown.Item href="#/action-1">
              <div
                className="d-flex"
                onClick={() => handleColor("#54BAB9", "#9ED2C6")}
              >
                <div className="circle" style={{ backgroundColor: "#54BAB9" }}>
                  <div
                    className="circle mx-5"
                    style={{ backgroundColor: "#9ED2C6" }}
                  ></div>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <div
                className="d-flex"
                onClick={() => handleColor("#FFE898", "#FFF8BC")}
              >
                <div className="circle" style={{ backgroundColor: "#FFE898" }}>
                  <div
                    className="circle mx-5"
                    style={{ backgroundColor: "#FFF8BC" }}
                  ></div>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <div
                className="d-flex"
                onClick={() => handleColor("#AFB4FF", "#B1E1FF")}
              >
                <div className="circle" style={{ backgroundColor: "#AFB4FF" }}>
                  <div
                    className="circle mx-5"
                    style={{ backgroundColor: "#B1E1FF" }}
                  ></div>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-4">
              <div
                className="d-flex"
                onClick={() => handleColor("#F9F5EB", "#fff")}
              >
                <div className="circle" style={{ backgroundColor: "#F9F5EB" }}>
                  <div
                    className="circle mx-5 shadow"
                    style={{ backgroundColor: "#fff" }}
                  ></div>
                </div>
                <br/>
                <br/>
                Default
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlecancle}>
            Cancle
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            <Plus />
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDiv;

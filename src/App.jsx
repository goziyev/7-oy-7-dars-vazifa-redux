import React, { useState } from "react";
import dragula from "dragula";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const task = input.trim();
    if (!task) return;
    const updatedTasks = [...tasks, task];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    setInput("");
  }

  return (
    <div>
      <div id="kaban">
        <div id="scroller">
          <div id="boards">
            <div className="board" id="board1">
              <header>Qilish kerak</header>
              <div className="cards" id="b1">
                {tasks.map((task, index) => (
                  <div className="card" key={index}>
                    <span className="cardtitle noselect">{task}</span>
                  </div>
                ))}
                <form onSubmit={handleSubmit}>
                  <input
                    className="input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Topshiriqni kiriting.."
                  />
                  <button className="button" type="submit">
                    Qo'shish
                  </button>
                </form>
              </div>
            </div>

            <div className="board" id="board2">
              <header>Bajarilmoqda</header>
              <div className="cards" id="b2">
                <form onSubmit={handleSubmit}>
                  <input
                    className="input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Topshiriqni kiriting.."
                  />
                  <button className="button" type="submit">
                    Qo'shish
                  </button>
                </form>
              </div>
            </div>

            <div className="board" id="board3">
              <header>Bajarilgan</header>
              <div className="cards" id="b3">
                <form onSubmit={handleSubmit}>
                  <input
                    className="input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Topshiriqni kiriting.."
                  />
                  <button className="button" type="submit">
                    Qo'shish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

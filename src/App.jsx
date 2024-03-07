// App.jsx
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css"; // CSS faylining import qilinayotgan joyi

function App() {
  // State lar
  const [tasks, setTasks] = useState([]);
  const [tasks2, setTasks2] = useState([]);
  const [tasks3, setTasks3] = useState([]);
  const [input, setInput] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const savedTasks2 = JSON.parse(localStorage.getItem("taskstwo")) || [];
    const savedTasks3 = JSON.parse(localStorage.getItem("tasksthree")) || [];
    setTasks(savedTasks);
    setTasks2(savedTasks2);
    setTasks3(savedTasks3);
  }, []);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;
    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "droppable-1") {
        const newTasks = Array.from(tasks);
        const [removed] = newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, removed);
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      } else if (source.droppableId === "droppable-2") {
        const newTasks2 = Array.from(tasks2);
        const [removed] = newTasks2.splice(source.index, 1);
        newTasks2.splice(destination.index, 0, removed);
        setTasks2(newTasks2);
        localStorage.setItem("taskstwo", JSON.stringify(newTasks2));
      } else if (source.droppableId === "droppable-3") {
        const newTasks3 = Array.from(tasks3);
        const [removed] = newTasks3.splice(source.index, 1);
        newTasks3.splice(destination.index, 0, removed);
        setTasks3(newTasks3);
        localStorage.setItem("tasksthree", JSON.stringify(newTasks3));
      }
    }
  }

  function handleSubmit(
    e,
    inputState,
    setInputState,
    tasksState,
    setTasksState,
    key
  ) {
    e.preventDefault();
    const task = inputState.trim();
    if (!task) return;
    const updatedTasks = [...tasksState, task];
    localStorage.setItem(key, JSON.stringify(updatedTasks));
    setTasksState(updatedTasks);
    setInputState("");
  }

  // JSX qismi
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <div id="kaban">
          <div id="scroller">
            <div id="boards">
              {/* Qilish kerak */}
              <div className="board" id="board1">
                <header>Qilish kerak</header>
                <div className="cards" id="b1">
                  <Droppable droppableId="droppable-1">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task, index) => (
                          <Draggable
                            key={task}
                            draggableId={task}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="card"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <span className="cardtitle noselect">
                                  {task}
                                </span>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                  <form
                    onSubmit={(e) =>
                      handleSubmit(e, input, setInput, tasks, setTasks, "tasks")
                    }
                  >
                    <input
                      className="input"
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Topshiriqni kiriting.."
                    />
                    {input && (
                      <button className="button" type="submit">
                        Qo'shish
                      </button>
                    )}
                  </form>
                </div>
              </div>

              {/* Bajarilmoqda */}
              <div className="board" id="board2">
                <header>Bajarilmoqda</header>
                <div className="cards" id="b2">
                  <Droppable droppableId="droppable-2">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks2.map((task, index) => (
                          <Draggable
                            key={task}
                            draggableId={task}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="card"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <span className="cardtitle noselect">
                                  {task}
                                </span>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                  <form
                    onSubmit={(e) =>
                      handleSubmit(
                        e,
                        inputTwo,
                        setInputTwo,
                        tasks2,
                        setTasks2,
                        "taskstwo"
                      )
                    }
                  >
                    <input
                      className="input"
                      type="text"
                      value={inputTwo}
                      onChange={(e) => setInputTwo(e.target.value)}
                      placeholder="Topshiriqni kiriting.."
                    />
                    {inputTwo && (
                      <button className="button" type="submit">
                        Qo'shish
                      </button>
                    )}
                  </form>
                </div>
              </div>

              {/* Bajarilgan */}
              <div className="board" id="board3">
                <header>Bajarilgan</header>
                <div className="cards" id="b3">
                  <Droppable droppableId="droppable-3">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks3.map((task, index) => (
                          <Draggable
                            key={task}
                            draggableId={task}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="card"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <span className="cardtitle noselect">
                                  {task}
                                </span>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                  <form
                    onSubmit={(e) =>
                      handleSubmit(
                        e,
                        inputThree,
                        setInputThree,
                        tasks3,
                        setTasks3,
                        "tasksthree"
                      )
                    }
                  >
                    <input
                      className="input"
                      type="text"
                      value={inputThree}
                      onChange={(e) => setInputThree(e.target.value)}
                      placeholder="Topshiriqni kiriting.."
                    />
                    {inputThree && (
                      <button className="button" type="submit">
                        Qo'shish
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;

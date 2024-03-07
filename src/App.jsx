import React, { useEffect } from "react";
import dragula from "dragula";
import "./App.css";

function App() {
  useEffect(() => {
    const drake = dragula([
      document.getElementById("b1"),
      document.getElementById("b2"),
      document.getElementById("b3"),
    ]);

    const element = document.getElementById("boards");
    const numberOfBoards = element.getElementsByClassName("board").length;
    const boardsWidth = numberOfBoards * 316;
    element.style.width = boardsWidth + "px";

    function disableSelect(e) {
      return false;
    }

    document.onselectstart = disableSelect;
    document.onmousedown = disableSelect;

    return () => {
      drake.destroy();
      document.onselectstart = null;
      document.onmousedown = null;
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Salom");
  }

  return (
    <div>
      <div id="kaban">
        <div id="scroller">
          <div id="boards">
            <div className="board" id="board1">
              <header>Qilish kerak</header>
              <div className="cards" id="b1">
                <div className="card">
                  <span className="cardtitle noselect">A great card #1</span>
                </div>
                <div className="card">
                  <span className="cardtitle noselect">A great card #2</span>
                </div>
                <div className="card">
                  <span className="cardtitle noselect">A great card #3</span>
                </div>
                <div className="card">
                  <span className="cardtitle noselect">A great card #4</span>
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    className="input"
                    type="text"
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
                <div className="card">
                  <span className="cardtitle">A great card #5</span>
                </div>
              </div>
            </div>

            <div className="board" id="board3">
              <header>Bajarilgan</header>
              <div className="cards" id="b3">
                <div className="card">
                  <span className="cardtitle noselect">A great card #5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

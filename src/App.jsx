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

    // Scrollable area
    const element = document.getElementById("boards");
    const numberOfBoards = element.getElementsByClassName("board").length;
    const boardsWidth = numberOfBoards * 316; // Width of all Boards
    element.style.width = boardsWidth + "px"; // set Width

    // disable text-selection
    function disableselect(e) {
      return false;
    }
    document.onselectstart = new Function();
    document.onmousedown = disableselect;

    return () => {
      drake.destroy();
      document.onselectstart = null;
      document.onmousedown = null;
    };
  }, []);

  return (
    <div>
      <div id="kaban">
        <div id="scroller">
          <div id="boards">
            <div className="board" id="board1">
              <header>On hold</header>
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
              </div>
            </div>

            <div className="board" id="board2">
              <header>In Progress</header>
              <div className="cards" id="b2">
                <div className="card">
                  <span className="cardtitle">A great card #5</span>
                </div>
              </div>
            </div>

            <div className="board" id="board3">
              <header>Done</header>
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

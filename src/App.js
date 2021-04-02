import React, { useState, useEffect } from "react";
import reviews from "./data";
import "./App.css";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

function App() {
  const [allData, setData] = useState(reviews);
  const [index, setIndex] = useState(0);

  

  useEffect(() => {
    const lastIndex = allData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, allData]);

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <p>Reviews</p>
        </div>
        <div className="reviews_container">
          <VscChevronLeft
            className="left_icon"
            onClick={() => setIndex(index - 1)}
          />
          {allData.map((persone, personeIndex) => {
            const { name, id, job, image, text } = persone;
            let currentPersone = "review";

            if (personeIndex === index) {
              currentPersone = "review reviewActive";
            }
            if (
              personeIndex === index - 1 ||
              (index === 0 && personeIndex === allData.length - 1)
            ) {
              currentPersone = "review reviewToRight";
            }

            return (
              <div className={currentPersone} key={id}>
                <img src={image} alt="" />
                <h1>{name}</h1>
                <h3>{job}</h3>
                <p>{text}</p>
              </div>
            );
          })}

          <VscChevronRight
            className="right_icon"
            onClick={() => setIndex(index + 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

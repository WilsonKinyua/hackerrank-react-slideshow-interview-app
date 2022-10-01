import React, { useState } from "react";

function Slides({ slides }) {
  const [slide, getSlide] = useState(0);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={slide === 0}
          onClick={() => getSlide(0)}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={slide === 0}
          onClick={() => getSlide(slide - 1)}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={slide === slides.length - 1}
          onClick={() => getSlide(slide + 1)}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slide]["title"]}</h1>
        <p data-testid="text">{slides[slide]["text"]}</p>
      </div>
    </div>
  );
}

export default Slides;

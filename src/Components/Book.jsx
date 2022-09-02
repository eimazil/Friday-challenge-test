import randColor from "../functions/randColor";
import { useEffect } from "react";
import { useState } from "react";

function Book({ title, img, price, id, ganre }) {
  return (
    <div className="books-container">
      <div className="caption-ganre">
        <figcaption
          style={{
            backgroundColor: randColor(),
            width: "500px",
          }}
        >
          {title}
        </figcaption>

        <div>{ganre}</div>
        <span className="price">{price + "\u20AC"}</span>
        <button class="button-1" role="button">
          PIRKTI
        </button>
      </div>

      <img
        className="book-img"
        style={{
          width: "200px",
        }}
        src={img}
        alt={title + " " + "book"}
      />
    </div>
  );
}

export default Book;

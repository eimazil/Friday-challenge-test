import { useState } from "react";
import { useEffect } from "react";
import Book from "./Book";

function Books() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);

  const [error2, setError2] = useState(null);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [items2, setItems2] = useState(null);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://in3.dev/knygos/ ")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch("https://in3.dev/knygos/types/ ")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded2(true);
          setItems2(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded2(true);
          setError2(error2);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (error2) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded2) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {items?.map((k, i) =>
        items2?.map((k2) =>
          k.type === k2.id ? (
            <Book
              key={i}
              title={k.title}
              img={k.img}
              price={k.price}
              id={k.id}
              ganre={k2.title}
            />
          ) : null
        )
      )}
    </>
  );
}

export default Books;

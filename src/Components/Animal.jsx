import randColor from "../functions/randColor";

function Animal({ animals }) {
  return (
    <>
      {animals.map((a) => (
        <div key={a.id}>
          <figcaption
            style={{
              backgroundColor: randColor(),
              width: "500px",
            }}
          >
            {a.animal}
          </figcaption>
          <img
            style={{
              width: "500px",
            }}
            src={a.img}
            alt={a.animal + "-animal"}
          />
        </div>
      ))}
    </>
  );
}

export default Animal;

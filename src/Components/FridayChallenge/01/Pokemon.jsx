import randColor from "../functions/randColor";

function Pokemon({ name, url }) {
  return (
    <div>
      <figcaption
        style={{
          backgroundColor: randColor(),
          width: "500px",
        }}
      >
        {name}
      </figcaption>
      {/* <img
        style={{
          width: "500px",
        }}
        src={url}
        alt={name}
      /> */}
      <a href={url}>Nuoroda į pokemoną</a>
    </div>
  );
}

export default Pokemon;

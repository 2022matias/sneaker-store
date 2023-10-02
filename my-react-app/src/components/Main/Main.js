import Card from "../Card/Card";
import "./main.scss";
import { useState } from "react";

function Main(props) {
  const [totalParaMostrar, setTotalPAraMostrar] = useState(3);

  const handleLoadMore = () => {
    setTotalPAraMostrar(totalParaMostrar + 3);
  };

  const copiaDelArray = props.shoes?.slice(0, totalParaMostrar);
  return (
    <>
      <div className="main">
        {copiaDelArray.map((shoe) => (
          <Card
            shoes={shoe}
            key={shoe.id}
            shoe={props.shoe}
            onShoeClick={props.onShoeClick}
          />
        ))}
      </div>
      {totalParaMostrar < props.shoes.length ? (
        <button className="main__button" onClick={handleLoadMore}>
          Mostrar mas
        </button>
      ) : null}
    </>
  );
}

export default Main;

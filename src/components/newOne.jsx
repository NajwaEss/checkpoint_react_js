import React, { useState, useEffect } from "react";

function NewOne() {
  const [pockemonNameList, setPockemonNameList] = useState([]);
  var i = 1;

  useEffect(() => {
    let images = [];
    let listeImage = [];
    while (i < 10) {
      const url = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          images.push(data);
        });
      i++;
      setPockemonNameList(images);
    }
  }, [i]);

  console.log(pockemonNameList);

  return (
    <>
      <div style={{ display: "flex" }}>
        {pockemonNameList.map((e) => (
          <div className="pockey">{e.name}</div>
        ))}
      </div>
    </>
  );
}

export default NewOne;

import React , { useState, useEffect } from "react";




function Pockemon() {
    const [pockemonNameList, setPockemonNameList]=useState([]);
    const [pockemonUrlList, setPockemonUrlList]=useState([]);
    const [pockemonImageList, setPockemonImageList]=useState([]);

useEffect(() =>{
    let liste=[];
    let listeImage=[];
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  .then(response => response.json())
  .then(data =>  data.results.map(e => {
    liste.push(e);
    listeImage.push(e.url);
    setPockemonNameList(liste);
    setPockemonUrlList(listeImage);

  }));
},[])

useEffect(() => {
    let images=[];
    pockemonUrlList.map(url=>{
        fetch(url) 
        .then(response => response.json())
        .then(data => {
            images.push(data);
            setPockemonImageList(images);
            console.log(images);
      })
      
        
    })
},[pockemonUrlList])
console.log(pockemonNameList);

    return(
        <>
        
        

        <div style={{display:"flex"}}>
            {pockemonNameList.map(e=>
                
                    <div className="pockey" >{e.name}</div>
                )
            }
        </div>
        <div style={{display:"flex"}}>
            {pockemonImageList.map(e=>
                
                    <img key={e.id} className="pockeyImage" src={e.sprites.back_default}/>
                )
            }
        </div>
        </>

    );
}

export default Pockemon;
import React from "react";


const TheCar = (props) =>{
  
    const colorOrNot = props.color ? (<p>Couleur: {props.color} </p>) : (<p> Couleur: Pas de couleur</p>)
    
        if (props.children){
             return( <div style={{backgroundColor : "green",
             width : "400px",
             height : "110px",
             padding : "5px",
             margin : "10px auto"
         }}>
                 <p>Marque: {props.children} </p>
                  {colorOrNot}
                 <p>Year: {props.year}</p>
             </div>)
        }
            else {
             return(<div style={{backgroundColor : "grey",
             width : "500px",
             height: "auto",
             padding : "10px",
             margin : "10px auto"
         }}>
             <p>Pas de données!!!</p>
         </div>)

            }

        };
       

export default TheCar;
import React from "react";
import TheCar from "./Car";

    class Title extends React.Component{
        noCopy = () => {
            alert("copie bloquée");
        } 
        style = (e)=>{
            e.target.classList.toggle("lestyle");
           
        }    
       
        render(){
           
            return(
                <div>
                    <h1 onMouseOver = {this.style}>{this.props.catalogue}</h1>

                    <p onCopy = {this.noCopy} >lorem ipsum valemlorem ipsum valemlorem ipsum valemlorem ipsum valem</p>

                    <TheCar color="red">Ford</TheCar>
                    <TheCar color="blue" >Renault</TheCar>
                    <TheCar ></TheCar>

                </div>
                )
        }
    } ;

    export default Title;
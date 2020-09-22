import React from "react";
import TheCar from "./Car";

    class Title extends React.Component{
       
       state = {
           voitures :[{name : "Ford",color:"red",year:2000},
                      {name : "Renault",color:"blue",year:2010},
                      {name : "Mercedes",color:"Black",year:2016}  ]
       }

       
       
        noCopy = () => {
            alert("copie bloquée");
        } 
        style = (e)=>{
            e.target.classList.toggle("lestyle");
           
        }    
        addTenYear = ()=>{
            let addYear = this.state.voitures.map((parametre)=>{ return (parametre.year -= 10); })
            
            this.setState({ addYear })
        }
        
        render(){
            const date = new Date().getFullYear()
                
            
            return(
                <div>
                    <h1 onMouseOver = {this.style}>{this.props.catalogue}</h1>

                    <p onCopy = {this.noCopy} >Copie ce paragraphe copie this paragraphe</p>

                    <button onClick = { this.addTenYear }> ajouter 10 ans</button>

                   { this.state.voitures.map((z,index)=> {
                        return(
                            <TheCar key={index} color = {z.color} year ={date - z.year +"ans"}> {z.name} </TheCar>
                   )})
                   }
                </div>
                )
        }
    } ;

    export default Title;
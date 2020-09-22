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
            let date = new Date().getFullYear()
                
            
            return(
                <div>
                    <h1 onMouseOver = {this.style}>{this.props.catalogue}</h1>

                    <p onCopy = {this.noCopy} >lorem ipsum valemlorem ipsum valemlorem ipsum valemlorem ipsum valem</p>

                    <button onClick = { this.addTenYear }> ajouter 10 ans</button>

                    <TheCar color={this.state.voitures[0].color} year={date - this.state.voitures[0].year} >{this.state.voitures[0].name}</TheCar>
                    <TheCar color={this.state.voitures[1].color} year={date - this.state.voitures[1].year} >{this.state.voitures[1].name}</TheCar>
                    <TheCar color={this.state.voitures[2].color} year={date - this.state.voitures[2].year} >{this.state.voitures[2].name}</TheCar>

                </div>
                )
        }
    } ;

    export default Title;
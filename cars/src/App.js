import React from 'react';
import Title from "./Components/Title";
import './App.css';

class App extends React.Component {

  state = {titre : "Le Catalogue voitures"};

    change = (e)=>{
      this.setState({titre:"Ne pas copier"})
    }
    param = (titre)=>{
      this.setState({titre : titre})
    }
    changeBind = (titre2)=>{
      this.setState({titre : titre2})
    }
    leform = (e)=>{
      
      this.setState({titre : e.target.value})
    }
  render(){ 
    
    return (
      <div className="App">
        <Title  catalogue ={this.state.titre} />
        <button onClick = {this.change}>Changer le titre en dur avec le state</button>
        <button onClick = {()=>this.param("C'est changée")}>Changer le titre avec un param</button>
        <button onClick = {this.changeBind.bind(this,"titre avec bind")}>Changer le titre avec bind</button>
        <input type="text" onChange = {this.leform} value={this.state.titre}/> 

      </div>
  );
} };

export default App;

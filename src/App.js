import './App.css';
import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      brand: 'Toyota',
      model: 'Prius'
    }
  }
   componentDidMount() {
    document.querySelector('h2').style.color = this.state.color;
   }

   componentDidUpdate() {
     document.querySelector('h2').style.color = this.state.color;
   }

  handleClick() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    this.setState({
      color: `rgb(${r} ${g} ${b})`
    })
}

render() {
  return <h2 onClick={this.handleClick.bind(this)}>Hi, my color is {this.state.color}</h2>
}


}

function App() {
  return (
    <Car car={"mercedes"}/>
  );
}

export default App;

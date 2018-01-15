import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react';
import MyButton from './components/MyButton';
import MyFeed from './components/MyFeed';
import MyCard from './components/MyCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      names: ['Carlos','Andres','Hernan'],
      day: 'Miercoles',
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.setState({day:'Jueves'})
  }
  handleClick(e){
    this.setState({counter:this.state.counter+1})
  }
  render() {
    console.log('render')
    console.log(this.state.counter)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hoy es {this.state.day}
        </p>       
        <MyButton counter={this.state.counter}
                  addCounter={this.handleClick}/>
        <Button
                    color='red'
                    content= 'Counter'
                    icon='heart'
                    label={{ basic: true, color: 'red', pointing: 'left', content: this.state.counter}}
                    onClick={this.handleClick}
                />
        <MyFeed />
        {this.state.names.map((m) => <MyCard key={m} name={m}/>)}
      </div>
    );
  }
}

export default App;

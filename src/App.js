import logo from './logo.svg';
import contacts from "./contacts.json";
import React, { Component } from 'react'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        mycontacts: contacts.slice(0,5)
    }
  }

  randomContactHandler = () => {
    this.setState((state, props) =>  ({
      mycontacts: [...state.mycontacts, contacts[Math.floor(Math.random() * (contacts.length - 5) + 5)]]
    }))
  }

  render() {
    const list = this.state.mycontacts.map(contact => {
      console.log(contact.name)
      return (
        <div style={{display:'flex'}}>
          <img style={{width: '150px', height: '150px', margin: '10px'}} src={contact.pictureUrl} alt=""/>
          <p style={{margin: '10px'}}>{contact.name}</p>
          <p style={{margin: '10px'}}>{contact.popularity}</p>
        </div>
      )  
    })
    console.log(list)
    return (
      <div className="App">
          <h1 className="App-header">IronContacts</h1>
          <button onClick={this.randomContactHandler}>Add Random Contact</button>
          <h2>Picture Name Popularity</h2>
          <div style={{display:'flex', flexDirection: 'column', alignItems:'flex-start', marginLeft: '50px'}}>
            {list}
          </div>
      </div>
    )  
  }
}


export default App;

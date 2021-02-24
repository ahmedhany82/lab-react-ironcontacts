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

  sortByNameHandler = () => {
    let dummyArr = this.state.mycontacts.slice()
    dummyArr.sort((a,b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState((state, props) =>  ({
      mycontacts: [...dummyArr ]
    }))
  }

  sortByPopularityHandler = () => {
    let dummyArr = this.state.mycontacts.slice()
    dummyArr.sort((a,b) => {
      return b.popularity - a.popularity
    })
    this.setState((state, props) =>  ({
      mycontacts: [...dummyArr ]
    }))
  }

  deleteHandler = (index) => {
    console.log(index)
    let dummyArr = this.state.mycontacts.slice()
    dummyArr.splice(index,1)
    this.setState((state, props) =>  ({
      mycontacts: [...dummyArr ]
    }))
}

  render() {
    const list = this.state.mycontacts.map((contact,index) => {
      return (
        <tr key={contact.id} style={{display:'flex', alignItems: 'center'}}>
          <img style={{width: '150px', height: '150px', margin: '10px'}} src={contact.pictureUrl} alt=""/>
          <p style={{margin: '10px'}}>{contact.name}</p>
          <p style={{margin: '10px'}}>{contact.popularity}</p>
          <button style={{width: '60px', height: '20px', margin: '20px'}}onClick={() => this.deleteHandler(index)}>Delete</button>
        </tr>
      )  
    })

    return (
      <div className="App">
          <h1 className="App-header">IronContacts</h1>
          <div style={{display:'flex'}}>
            <button style={{margin: '10px'}} onClick={this.randomContactHandler}>Add Random Contact</button>
            <button style={{margin: '10px'}} onClick={this.sortByNameHandler}>Sort by name</button>
            <button style={{margin: '10px'}} onClick={this.sortByPopularityHandler}>Sort by popularity</button>
          </div>
          <table style={{tableLayout: "auto", width: "50%", paddingLeft: '150px'}}>
          <tr style={{display: 'flex', justifyContent: 'space-between', marginLeft: '10px'}}>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
            {list}
        </table>
      </div>
    )  
  }
}


export default App;

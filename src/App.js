import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    // super() borrows the methods in Component so we can use them in our class App
    
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // // bind defines the scope of the this keyword in any given function
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <div className="App">
      <h1> Monster Rolodex </h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

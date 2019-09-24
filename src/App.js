import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component'
import "./App.css";

class App extends Component {
  state = {
    psychos: [],
    searchField: ''
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ psychos: users }));
  }

  onChangeHandler = e => {
    this.setState({searchField: e.target.value})
  } 

  render() {
    const {psychos, searchField} = this.state
    const filteredPsychos = psychos.filter(psycho => psycho.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Psychos Rolodex</h1>
        <SearchBox placeholder='search psychos' handleChange={this.onChangeHandler}/>
        <CardList psychos={filteredPsychos}/>
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import CardList from "../components/CardList.js";
import Scroll from "../components/Scroll.js";
import SearchBox from "../components/SearchBox.js";
import ErrorBoundry from "../components/ErrorBoundry.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        // setTimeout('',5000)
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    // usamos setState para cambiar el valor del atributo searchfild
    // esto se logra obteniendo el value del target cada vez que presionamos
    // una tecla y se inserta en el input de SearchBox
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    // Aca filtramos la lista de robots que queremos mostrar
    // según el input searchfiled
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="f1 tc ma6">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterRobots} />
            {console.log("Lucho gay")}
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;

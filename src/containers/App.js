import React, { useState, useEffect } from "react";
import CardList from "../components/CardList.js";
import Scroll from "../components/Scroll.js";
import SearchBox from "../components/SearchBox.js";
import ErrorBoundry from "../components/ErrorBoundry.js";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1 className="f1 tc ma6">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;

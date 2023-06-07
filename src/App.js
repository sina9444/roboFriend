import React from "react";
import CardList from "./Cardlist";
import Header from "./header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Robo: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((s) => {
        this.setState({ Robo: s });
      });
  }

  onSearchChenge = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobot = this.state.Robo.filter((user) => {
      return user.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    console.log(filterRobot);
    return (
      <div>       
        <Header searchChenge={this.onSearchChenge} />
        <CardList robonew={filterRobot} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 1 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }
  handleIncrement = (counter) => {
    const counters = this.state.counters;
    counters.filter((item) => item.id === counter.id)[0].value += 1;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = this.state.counters;
    counters.filter((item) => item.id === counter.id)[0].value -= 1;
    this.setState({ counters });
  };
  handleDelete = (counter) => {
    const counters = this.state.counters.filter(
      (item) => item.id !== counter.id
    );
    console.log(counters);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

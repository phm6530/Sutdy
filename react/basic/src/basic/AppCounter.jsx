import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class AppCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <div className='container'>
        <div className='banner'>
          Total Count: {count} {count > 10 ? '🔥' : '❄️'}
        </div>
        <div className='counters'>
          <Counter total={count} Click={this.handleClick} />
          <Counter total={count} Click={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default AppCounter;
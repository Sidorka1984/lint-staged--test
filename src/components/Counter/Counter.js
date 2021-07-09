import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handlerIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handlerDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handlerIncrement}
          onDecrement={this.handlerDecrement}
        />
      </div>
    );
  }
}
export default Counter;
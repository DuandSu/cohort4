import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

    render() {
      return (
          <h3 className={this.props.cClass} ikey={this.props.cKey} onClick={this.props.cOnPushMe} >{this.state.date.toLocaleTimeString()}.</h3>
      );
    }
  }

export default Clock;
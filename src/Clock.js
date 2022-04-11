import React from "react";

export default class Clock extends React.Component {
  constructor(){
    super()
    this.state={time: new Date()}
  }
  currentTime(){
    this.setState({
      time: new Date()
    })
  }
  componentWillMount(){
    setInterval(()=> this.currentTime(),1000);
  }

  render() {
    return <div>
        <h1>The time is:</h1>
        <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
    </div>;
  }
}
